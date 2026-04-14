<?php
/**
 * Plugin Name:     UD Block: Hero Video
 * Description:     Gibt einen Hero-Bereich mit Hintergrundvideo, Posterbild und Overlay-Text aus.
 * Version:         1.0.0
 * Author:          ulrich.digital gmbh
 * Author URI:      https://ulrich.digital/
 * License:         GPL v2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     ud-hero-video-block-ud
 */

defined('ABSPATH') || exit;

foreach ([
    'block-register.php',
    'enqueue.php',
    'helpers.php',
    'render.php',
] as $file) {
    $path = __DIR__ . '/includes/' . $file;
    if (file_exists($path)) {
        require_once $path;
    }
}
