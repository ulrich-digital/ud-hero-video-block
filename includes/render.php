<?php
/**
 * Render-Logik für den Hero-Video-Block
 */

defined('ABSPATH') || exit;

/**
 * Rendert den Hero-Video-Block.
 *
 * @param array    $attributes Block-Attribute.
 * @param string   $content    Block-Inhalt.
 * @param WP_Block $block      Block-Instanz.
 * @return string
 */
function ud_render_hero_video_block($attributes, $content, $block) {
    $eyebrow              = isset($attributes['eyebrow']) ? (string) $attributes['eyebrow'] : '';
    $headline             = isset($attributes['headline']) ? (string) $attributes['headline'] : '';
    $video_id             = isset($attributes['videoId']) ? (int) $attributes['videoId'] : 0;
    $poster_id            = isset($attributes['posterId']) ? (int) $attributes['posterId'] : 0;
    $video_url_attribute  = isset($attributes['videoUrl']) ? (string) $attributes['videoUrl'] : '';
    $poster_url_attribute = isset($attributes['posterUrl']) ? (string) $attributes['posterUrl'] : '';
    $show_video_on_mobile = ! empty($attributes['showVideoOnMobile']);

    $loop = ! empty($attributes['loop']);
    $video_url  = $video_id ? wp_get_attachment_url($video_id) : $video_url_attribute;
    $poster_url = $poster_id ? wp_get_attachment_image_url($poster_id, 'full') : $poster_url_attribute;

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'ud-hero-video-block alignfull',
	'data-show-video-on-mobile' => $show_video_on_mobile ? 'true' : 'false',
]);

    ob_start();
    ?>
    <section <?php echo $wrapper_attributes; ?> data-show-video-on-mobile="<?php echo esc_attr($show_video_on_mobile ? 'true' : 'false'); ?>">
<?php if ($poster_url) : ?>
	<div class="ud-hero-video-block__poster"
		style="background-image:url('<?php echo esc_url($poster_url); ?>');">
	</div>
<?php endif; ?>

<?php if ($video_url) : ?>
	<video
		class="ud-hero-video-block__video"
		autoplay
		muted
		playsinline
		preload="metadata"
		<?php if ($loop) : ?>loop<?php endif; ?>
		<?php if ($poster_url) : ?>
			poster="<?php echo esc_url($poster_url); ?>"
		<?php endif; ?>
	>
		<source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
	</video>
<?php endif; ?>




        <div class="ud-hero-video-block__shade"></div>

        <div class="ud-hero-video-block__content">
            <div class="ud-hero-video-block__text-box">
                <?php if ($eyebrow !== '') : ?>
                    <p class="ud-hero-video-block__eyebrow"><?php echo esc_html($eyebrow); ?></p>
                <?php endif; ?>

                <?php if ($headline !== '') : ?>
                    <h1 class="ud-hero-video-block__headline"><?php echo esc_html($headline); ?></h1>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}
