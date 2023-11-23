<?php


function chicdressing_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    // Chargement de la feuille de style complémentaire du thème enfant
    wp_enqueue_style(
        'theme-style',
        get_stylesheet_directory_uri() . '/assets/css/theme.css',
        array(),
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'chicdressing_enqueue_styles');


add_filter('big_image_size_threshold', '__return_false');


function desactivation_ashe_gfonts_scripts()
{
    wp_deregister_style('ashe-playfair-font', ashe_playfair_font_url(), array(), '1.0.0');
    wp_deregister_style('ashe-opensans-font', ashe_opensans_font_url(), array(), '1.0.0');

    // Désactivation de la font Kalam
    if (ashe_options('typography_logo_family') == 'Kalam' || ashe_options('typography_nav_family') == 'Kalam') {
        wp_deregister_style('ashe-kalam-font', ashe_kalam_font_url(), array(), '1.0.0');
    }

    // Désactivation de la font Rokkitt
    if (ashe_options('typography_logo_family') == 'Rokkitt' || ashe_options('typography_nav_family') == 'Rokkitt') {
        wp_deregister_style('ashe-rokkitt-font', ashe_rokkitt_font_url(), array(), '1.0.0');
    }
}
add_action('wp_enqueue_scripts', 'desactivation_ashe_gfonts_scripts', 11);


function desactivation_fontello_ashe_scripts()
{

    // Fontello Icons
    wp_dequeue_style('fontello', get_theme_file_uri('/assets/css/fontello.css'));
    wp_deregister_style('fontello', get_theme_file_uri('/assets/css/fontello.css'));
}
add_action('wp_enqueue_scripts', 'desactivation_fontello_ashe_scripts', 11);
