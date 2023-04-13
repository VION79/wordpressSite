<?php
add_action( 'init', 'block_course_theme_register_pattern_categories' );

function block_course_theme_register_pattern_categories() {
    register_block_pattern_category( 'block-course-theme', array( 
        'label' => __( 'Block Course Theme', 'block-course-theme' )
    ) );
}

add_action( 'after_setup_theme', 'block_course_theme_setup_patterns' );

function block_course_theme_setup_patterns() {
    remove_theme_support( 'core-block-patterns' );
}