

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/** */
import {
    TextControl,
	PanelBody,
	Panel
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {attributes, setAttributes} ) {
    return (
        <div {...useBlockProps()}>
            <h2 className={"subscribe-header"}>{attributes.heading}</h2>
            <p>Visit our <a href="/subscribe">subscribe page</a> and sign up to get notified</p>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title="Subscribe attributes" initialOpen={true}>
						<TextControl className="blocks-base-control__input"
									label={"Heading"}
									value={attributes.heading}
									onChange={(val) => setAttributes({heading: val})}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</div>
    );
}
