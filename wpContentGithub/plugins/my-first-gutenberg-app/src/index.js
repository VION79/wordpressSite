import { SearchControl } from '@wordpress/components';
import { useState, render } from '@wordpress/element'; 
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
  
function MyFirstApp() {
    const [searchTerm, setSearchTerm] = useState( '' );
    const pages = useSelect(
        select =>
            select( coreDataStore ).getEntityRecords( 'postType', 'page' ),
        []
    );
    return (
        <div>
            <SearchControl
                onChange={ setSearchTerm }
                value={ searchTerm }
            />
            <PagesList pages={ pages }/>
        </div>
    )
}


function PagesList( { pages } ) {
    return (
        <table className="wp-list-table widefat fixed striped table-view-list">
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                { pages?.map( page => (
                    <tr key={ page.id }>
                        <td>{ decodeEntities( page.title.rendered ) }</td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    )
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