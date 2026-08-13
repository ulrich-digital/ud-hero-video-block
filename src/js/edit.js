import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button, PanelBody, ToggleControl } from '@wordpress/components';
import { pencil } from '@wordpress/icons';

export default function Edit( { attributes, setAttributes } ) {
	const {
		eyebrow,
		headline,
		videoId,
		videoUrl,
		posterId,
		posterUrl,
		showVideoOnMobile,
		loop,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'ud-hero-video-block ud-hero-video-block--editor',
		'data-show-video-on-mobile': showVideoOnMobile ? 'true' : 'false',
	} );

	const onSelectVideo = ( media ) => {
		setAttributes( {
			videoId: media?.id || 0,
			videoUrl: media?.url || '',
		} );
	};

	const onSelectPoster = ( media ) => {
		setAttributes( {
			posterId: media?.id || 0,
			posterUrl: media?.url || '',
		} );
	};

	let mediaPreview;

	if ( videoUrl ) {
		mediaPreview = (
			<video
				className="ud-hero-video-block__video"
				autoPlay
				muted
				loop={ loop }
				playsInline
				preload="metadata"
				poster={ posterUrl || undefined }
				src={ videoUrl }
			/>
		);
	} else if ( posterUrl ) {
		mediaPreview = (
			<div
				className="ud-hero-video-block__poster"
				style={ { backgroundImage: `url(${ posterUrl })` } }
			/>
		);
	} else {
		mediaPreview = (
			<div className="ud-hero-video-block__placeholder">
				{ __(
					'Video oder Posterbild auswählen',
					'ud-hero-video-block-ud'
				) }
			</div>
		);
	}

	const videoEditLabel = videoUrl
		? __( 'Hintergrundvideo bearbeiten', 'ud-hero-video-block-ud' )
		: __( 'Hintergrundvideo wählen', 'ud-hero-video-block-ud' );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Posterbild', 'ud-hero-video-block-ud' ) }
					initialOpen={ true }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectPoster }
							allowedTypes={ [ 'image' ] }
							value={ posterId }
							render={ ( { open } ) =>
								posterUrl ? (
									<div className="ud-hero-video-block__poster-control">
										<img src={ posterUrl } alt="" />
										<Button
											className="ud-hero-video-block__edit-button"
											icon={ pencil }
											label={ __(
												'Posterbild bearbeiten',
												'ud-hero-video-block-ud'
											) }
											onClick={ open }
										/>
									</div>
								) : (
									<Button
										variant="secondary"
										onClick={ open }
										__next40pxDefaultSize={ true }
									>
										{ __(
											'Posterbild wählen',
											'ud-hero-video-block-ud'
										) }
									</Button>
								)
							}
						/>
					</MediaUploadCheck>
				</PanelBody>

				<PanelBody
					title={ __( 'Wiedergabe', 'ud-hero-video-block-ud' ) }
					initialOpen={ true }
				>
					<ToggleControl
						label={ __(
							'Video wiederholen',
							'ud-hero-video-block-ud'
						) }
						checked={ loop }
						onChange={ ( value ) =>
							setAttributes( { loop: value } )
						}
						__next40pxDefaultSize={ true }
						__nextHasNoMarginBottom={ true }
					/>
					<ToggleControl
						label={ __(
							'Video auf Mobilgeräten abspielen',
							'ud-hero-video-block-ud'
						) }
						checked={ showVideoOnMobile }
						onChange={ ( value ) =>
							setAttributes( { showVideoOnMobile: value } )
						}
						__next40pxDefaultSize={ true }
						__nextHasNoMarginBottom={ true }
					/>
				</PanelBody>
			</InspectorControls>

			<section { ...blockProps }>
				{ mediaPreview }

				<div className="ud-hero-video-block__shade"></div>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectVideo }
						allowedTypes={ [ 'video' ] }
						value={ videoId }
						render={ ( { open } ) => (
							<Button
								className="ud-hero-video-block__edit-button ud-hero-video-block__video-edit"
								icon={ pencil }
								label={ videoEditLabel }
								onClick={ open }
							/>
						) }
					/>
				</MediaUploadCheck>

				<div className="ud-hero-video-block__content">
					<div className="ud-hero-video-block__text-box">
						<RichText
							tagName="p"
							className="ud-hero-video-block__eyebrow"
							value={ eyebrow }
							onChange={ ( value ) =>
								setAttributes( { eyebrow: value } )
							}
							placeholder={ __(
								'Eyebrow hinzufügen',
								'ud-hero-video-block-ud'
							) }
						/>

						<RichText
							tagName="h1"
							className="ud-hero-video-block__headline"
							value={ headline }
							onChange={ ( value ) =>
								setAttributes( { headline: value } )
							}
							placeholder={ __(
								'Headline hinzufügen',
								'ud-hero-video-block-ud'
							) }
						/>
					</div>
				</div>
			</section>
		</>
	);
}
