<?php
/**
 * @package kbCarousel
 */

/*
Plugin Name: kbCarousel
Plugin URI: https://github.com/krzbes/kb-carousel
Description: My own implementation of <a href="https://owlcarousel2.github.io/OwlCarousel2/">Owl Carousel</a> plugin for WordPress
Author: krzbes
Version: 1.0.0
 */
function kb_carousel_block_init()
{
    register_block_type(__DIR__ . '/build');
}

add_action('init', 'kb_carousel_block_init');

function my_plugin_enqueue_scripts()
{
    wp_enqueue_style(
        'owl-carousel-css',
        plugin_dir_url(__FILE__) . '/node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
    );
    wp_enqueue_script(
        'owl-carousel-js',
        plugin_dir_url(__FILE__) . '/node_modules/owl.carousel/dist/owl.carousel.min.js',
        array('jquery'));
	wp_enqueue_script(
		'owl-carousel-initialization-js',
		plugin_dir_url(__FILE__) . '/initialize.js',
		array('jquery'));
}

add_action('wp_enqueue_scripts', 'my_plugin_enqueue_scripts');

