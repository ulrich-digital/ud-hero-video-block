<?php
/**
 * Enqueue von Styles und Scripts für den Hero-Video-Block
 */

defined('ABSPATH') || exit;

function ud_enqueue_hero_video_block_assets() {
    if (is_admin()) {
        return;
    }

    // Frontend-spezifische Erweiterungen können bei Bedarf hier ergänzt werden.
}

add_action('wp_enqueue_scripts', 'ud_enqueue_hero_video_block_assets');
