import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		eyebrow,
		headline,
		videoId,
		videoUrl,
		posterId,
		posterUrl,
		showVideoOnMobile,
	} = attributes;

	const blockProps = useBlockProps({
		className: "ud-hero-video-block ud-hero-video-block--editor",
		"data-show-video-on-mobile": showVideoOnMobile ? "true" : "false",
	});

	const onSelectVideo = (media) => {
		setAttributes({
			videoId: media?.id || 0,
			videoUrl: media?.url || "",
		});
	};

	const onSelectPoster = (media) => {
		setAttributes({
			posterId: media?.id || 0,
			posterUrl: media?.url || "",
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Medien", "ud-hero-video-block-ud")}
					initialOpen={true}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectVideo}
							allowedTypes={["video"]}
							value={videoId}
							render={({ open }) => (
								<Button
									variant="secondary"
									onClick={open}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									{videoUrl
										? __(
												"Video ersetzen",
												"ud-hero-video-block-ud"
										  )
										: __(
												"Video wählen",
												"ud-hero-video-block-ud"
										  )}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					<TextControl
						label={__("Video-URL", "ud-hero-video-block-ud")}
						value={videoUrl}
						onChange={(value) =>
							setAttributes({ videoId: 0, videoUrl: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectPoster}
							allowedTypes={["image"]}
							value={posterId}
							render={({ open }) => (
								<Button
									variant="secondary"
									onClick={open}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								>
									{posterUrl
										? __(
												"Posterbild ersetzen",
												"ud-hero-video-block-ud"
										  )
										: __(
												"Posterbild wählen",
												"ud-hero-video-block-ud"
										  )}
								</Button>
							)}
						/>
					</MediaUploadCheck>

					<TextControl
						label={__("Posterbild-URL", "ud-hero-video-block-ud")}
						value={posterUrl}
						onChange={(value) =>
							setAttributes({ posterId: 0, posterUrl: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>

				<PanelBody
					title={__("Optionen", "ud-hero-video-block-ud")}
					initialOpen={true}
				>
					<ToggleControl
						label="Video loopen"
						checked={attributes.loop}
						onChange={(value) => setAttributes({ loop: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<ToggleControl
						label={__(
							"Video auch mobil anzeigen",
							"ud-hero-video-block-ud"
						)}
						checked={showVideoOnMobile}
						onChange={(value) =>
							setAttributes({ showVideoOnMobile: value })
						}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				{videoUrl ? (
					<video
						className="ud-hero-video-block__video"
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
						poster={posterUrl || undefined}
						src={videoUrl}
					/>
				) : posterUrl ? (
					<div
						className="ud-hero-video-block__poster"
						style={{ backgroundImage: `url(${posterUrl})` }}
					/>
				) : (
					<div className="ud-hero-video-block__placeholder">
						{__(
							"Video oder Posterbild auswählen",
							"ud-hero-video-block-ud"
						)}
					</div>
				)}

				<div className="ud-hero-video-block__shade"></div>

				<div className="ud-hero-video-block__content">
					<div className="ud-hero-video-block__text-box">
						<RichText
							tagName="p"
							className="ud-hero-video-block__eyebrow"
							value={eyebrow}
							onChange={(value) =>
								setAttributes({ eyebrow: value })
							}
							placeholder={__(
								"Eyebrow hinzufügen",
								"ud-hero-video-block-ud"
							)}
						/>

						<RichText
							tagName="h1"
							className="ud-hero-video-block__headline"
							value={headline}
							onChange={(value) =>
								setAttributes({ headline: value })
							}
							placeholder={__(
								"Headline hinzufügen",
								"ud-hero-video-block-ud"
							)}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
