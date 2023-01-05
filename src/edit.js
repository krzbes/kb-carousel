

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import('../node_modules/owl.carousel/dist/owl.carousel.min.js')
import('../node_modules/owl.carousel/dist/assets/owl.carousel.min.css')
import {subscribe, useSelect} from "@wordpress/data";
import { withSelect } from '@wordpress/data';
const { select } = wp.data;

import { useEffect, useState } from 'react';
import axios from 'axios';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const [posts, setPosts] = useState(props.attributes.posts || []);

	useEffect(() => {
		const unsubscribe = subscribe(() => {
			const posts = select('core').getEntityRecords('postType', 'post');
			setPosts(posts);
		});

		return () => {
			unsubscribe();
		};
	}, []);


	if (posts) {
		let choices = [];
		posts.forEach((post) => {
			choices.push({value: post.id, label: post.title.rendered, link: post.guid.rendered, excerpt: post.excerpt.rendered});
		});

		return (
			<div class="owl-carousel">
				{choices.map(post => (
					<div>
						<h3>{post.label}</h3><br/>
						<p>{post.excerpt}</p>
					</div>
				))}
			</div>
		);
	} else {
		return 'loading';
	}
}

