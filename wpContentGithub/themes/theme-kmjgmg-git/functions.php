<?php

function followandrew_register_styles(){

    wp_enqueue_style('followandrew-style', get_template_directory_uri(), array('followandrew-bootstrap'), '1.0', 'all');
}

 add_action( 'wp_enqueue_style', 'followandrew_register_styles'); 

?>
