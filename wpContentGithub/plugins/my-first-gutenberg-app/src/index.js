
import { decodeEntities } from '@wordpress/html-entities';
  
import { SearchControl, Spinner, Button, Modal, TextControl } from '@wordpress/components';

import { useState, render } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

function PageEditButton({ pageId }) {
    const [ isOpen, setOpen ] = useState( false );
    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );
    return (
        <>
            <Button
                onClick={ openModal }
                variant="primary"
            >
                Edit
            </Button>
            { isOpen && (
                <Modal onRequestClose={ closeModal } title="Edit page">
                    <EditPageForm
                        pageId={pageId}
                        onCancel={closeModal}
                        onSaveFinished={closeModal}
                    />
                </Modal>
            ) }
        </>
    )
}

function MyFirstApp() {
    const [ searchTerm, setSearchTerm ] = useState( '' );
    const { pages, hasResolved } = useSelect(
        ( select ) => {
            const query = {};
            if ( searchTerm ) {
                query.search = searchTerm;
            }
            const selectorArgs = [ 'postType', 'page', query ];
            return {
                pages: select( coreDataStore ).getEntityRecords(
                    ...selectorArgs
                ),
                hasResolved: select( coreDataStore ).hasFinishedResolution(
                    'getEntityRecords',
                    selectorArgs
                ),
            };
        },
        [ searchTerm ]
    );
  
    return (
        <div>
            <SearchControl onChange={ setSearchTerm } value={ searchTerm } />
            <PagesList hasResolved={ hasResolved } pages={ pages } />
        </div>
    );
}
  
function PagesList( { hasResolved, pages } ) {
    if ( ! hasResolved ) {
        return <Spinner />;
    }
    if ( ! pages?.length ) {
        return <div>No results</div>;
    }
  
    return (
        <table className="wp-list-table widefat fixed striped table-view-list">
            <thead>
                <tr>
                    <td>Title</td>
                    <td style={{width: 120}}>Actions</td>
                </tr>
            </thead>
            <tbody>
                { pages?.map( ( page ) => (
                    <tr key={ page.id }>
                        <td>{ decodeEntities( page.title.rendered ) }</td>
                        <td>
                            <PageEditButton pageId={ page.id } />
                        </td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    );
}

export function EditPageForm( { pageId, onCancel, onSaveFinished } ) {
    const page = useSelect(
        select => select( coreDataStore ).getEditedEntityRecord( 'postType', 'page', pageId ),
        [ pageId ]
    );
    const { editEntityRecord } = useDispatch( coreDataStore );
    const handleChange = ( title ) => editEntityRecord( 'postType', 'page', pageId, { title } );
 
    return (
        <div className="my-gutenberg-form">
            <TextControl
                label="Page title:"
                value={ page.title }
                onChange={ handleChange }
            />
            <div className="form-buttons">
                <Button onClick={ onSaveFinished } variant="primary">
                    Save
                </Button>
                <Button onClick={ onCancel } variant="tertiary">
                    Cancel
                </Button>
            </div>
        </div>
    );
}


  
window.addEventListener(
    'load',
    function () {
        render(
            <MyFirstApp />,
            document.querySelector( '#my-first-gutenberg-app' )
        );
    },
    false
);