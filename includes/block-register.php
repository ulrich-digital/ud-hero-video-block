<?php
/**
 * Registrierung des Hero-Video-Blocks
 */

defined('ABSPATH') || exit;

function ud_register_hero_video_block() {
    register_block_type_from_metadata(
        __DIR__ . '/../',
        [
            'render_callback' => 'ud_render_hero_video_block',
        ]
    );
}

add_action('init', 'ud_register_hero_video_block');

add_filter(
    'block_categories_all',
    function ($categories, $post) {
        foreach ($categories as $cat) {
            if ($cat['slug'] === 'ud-blocks') {
                return $categories;
            }
        }

        $categories[] = [
            'slug'  => 'ud-blocks',
            'title' => __('UD Blocks', 'ud-hero-video-block-ud'),
        ];

        return $categories;
    },
    10,
    2
);
