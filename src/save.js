/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
const { withSelect, select } = wp.data;
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
    const { attributes } = props;
    const { posts } = attributes;

    if (posts) {
        let choices = [];
        posts.forEach((post) => {
            choices.push({value: post.id, label: post.title.rendered});
        });

        return (
            <div class="owl-carousel">
                {choices.map(post => (
                    <div>
                        <p>{post.label}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return 'loading';
    }
}
