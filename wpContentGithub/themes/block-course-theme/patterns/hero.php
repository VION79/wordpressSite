<?php
/**
 * Title: Hero
 * Slug: block-course-theme/hero
 * Categories: featured, block-course-theme
 */
?>
<!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-background.webp' ) ); ?>",
    "dimRatio":50,"overlayColor":"tertiary","isDark":false,"align":"full"} -->
<div class="wp-block-cover alignfull is-light">
    <span aria-hidden="true"class="wp-block-cover__background has-tertiary-background-color has-background-dim"></span>
    <img class="wp-block-cover__image-background" alt="" src=
        "<?php echo esc_url( get_theme_file_uri( 'assets/images/hero-background.webp' ) ); ?>" 
        data-object-fit="cover"
    />
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-contrast-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"2.5rem"}},"layout":{"type":"constrained","wideSize":"%","contentSize":"75%"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="has-text-align-center">
    <?php _e( 'Welcome to My Site', 'block-course-theme/hero' ); ?>
</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">
    <?php 
    _e( 'This is my little home away from home. Here, you will get to know me. Ill share my likes, hobbies, and more.  Every now and then, Ill even have something interesting to say in a blog post.' ); 
    ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline">
    <a class="wp-block-button__link wp-element-button">
        <?php _e( 'Click Here for updates →', 'block-course-theme/hero' ); ?>
    </a>
</div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->