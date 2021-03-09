import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { keyframes } from 'styled-components';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap } from 'gsap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Input from '../components/input';
import Tag from '../components/tag';
import Arrow from '../components/arrow';

const heartBeat = keyframes`
	0% {
		opacity: 0;
		transform: scale(0);
	}

	34% {
		transform: scale(1.1);
	}

	100% {
		opacity: 1;
		transform: scale(1);

	}
`;

const H1 = styled.h1`
	margin-top: 120px;
	margin-bottom: 35px;

	.font-family-cursive {
		font-size: 88px;
		line-height: ${78 / 88};
		color: var(--blue-pure);
	}

	&[data-scroll] span {
		display: inline-block;
		transform: translate3d(0, 100%, 0);
		opacity: 0;
		will-change: transform, opacity;
		transition: transform 1.5s var(--ease-out-expo), opacity 1.5s var(--ease-out-expo);
	}

	&[data-scroll].is-inview span {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

const Content = styled.div`
	font-size: 18px;
	line-height: ${24 / 18};
	color: var(--blue-dark-grayish);

	[data-scroll] {
		transform: translate3d(0, 100%, 0);
		opacity: 0;
		will-change: transform opacity;
		transition: transform 1.5s var(--ease-out-expo), opacity 1.5s var(--ease-out-expo);
	}

	[data-scroll].is-inview {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}

	& > *:first-child {
		margin-top: 0;
	}

	& > *:last-child {
		margin-bottom: 0;
	}
`;

const Image = styled.div`
	overflow: hidden;
	background-color: var(--white);
	margin-left: ${(1 / 5) * 100}%;
	border-bottom-right-radius: 40px;
	border-bottom-left-radius: 40px;

	img {
		image-rendering: high-quality;
	}
	& > header {
		border-radius: 40px;
		overflow: hidden;

		width: 440px;
		max-width: 100%;
		animation-name: ${heartBeat};
		animation-timing-function: var(--ease-out-expo);
		animation-duration: 2s;
		animation-play-state: paused;
	}

	&.is-inview > header {
		animation-play-state: running;
	}
`;

const IndexPage = () => {
	const { scroll } = useLocomotiveScroll();
	const tl = useRef(null);
	const imageRef = useRef(null);

	useLayoutEffect(() => {
		tl.current = gsap.timeline({ paused: true });
		tl.current.add('start');
		tl.current.fromTo(
			imageRef.current,
			{ y: 0, x: 0, scaleX: 1, scaleY: 1 },
			{
				y: 562,
				x: -537,
				scaleX: `${386 / 440}`,
				scaleY: `${203 / 811}`,
			},
			'start',
		);
		tl.current.fromTo(
			imageRef.current.querySelector('.js-image'),
			{ scaleX: 1, scaleY: 1 },
			{
				scaleX: `${440 / 386}`,
				scaleY: `${811 / 203}`,
			},
			'start',
		);
		tl.current.fromTo(
			imageRef.current.querySelector('.js-body'),
			{ scaleX: 1, scaleY: 1, opacity: 0 },
			{
				scaleX: `${440 / 386}`,
				scaleY: `${811 / 203}`,
				opacity: 1,
			},
			'start',
		);
	});

	useEffect(() => {
		if (scroll) {
			scroll.on('scroll', ({ currentElements, scroll, limit }) => {
				const progress = (1 * scroll.y) / limit.y;

				console.log(progress);
				tl.current.progress(progress * 2);
			});
		}
	}, [scroll]);

	return (
		<Layout>
			<SEO title="Home" />

			<div className="Site-container" style={{ zIndex: '2' }}>
				<div className="row">
					<div className="col-6 offset-md-1">
						<div
							style={{
								marginRight: `${(1 / 6) * 100}%`,
								marginLeft: `${(1 / 6) * 100}%`,
							}}>
							<H1 className="h2" data-scroll>
								<span>Love</span>{' '}
								<span style={{ transitionDelay: '0.1s' }}>where</span>
								<br />
								<span style={{ transitionDelay: '0.2s' }}>you</span>{' '}
								<span
									className="font-family-cursive"
									style={{ transitionDelay: '0.3s' }}>
									Work.
								</span>
							</H1>
							<Content>
								<p data-scroll>
									Find residential coworking spaces that keep you productive and
									connected.
								</p>
								<Input
									label={'Address'}
									icon={'Marker'}
									style={{ marginTop: '35px' }}
								/>
								<button
									className="Button Button--is-blue"
									type="button"
									data-scroll
									style={{ marginTop: '39px' }}>
									Get started
								</button>
							</Content>
						</div>
						<Arrow />
					</div>
					<div className="col-5 position-relative">
						<Tag style={{ position: 'absolute', zIndex: '1', bottom: '280px' }} />
						<Tag
							style={{
								position: 'absolute',
								zIndex: '1',
								bottom: '160px',
								left: '-60px',
							}}
						/>
						<Image data-scroll ref={imageRef}>
							<header>
								<StaticImage
									className="js-image"
									src="../images/office.png"
									width={440}
									quality={95}
									formats={['AUTO', 'WEBP', 'AVIF']}
									alt="Office"
									style={{ display: 'inline-block', verticalAlign: 'middle' }}
								/>
							</header>
							<div
								className="js-body"
								style={{
									padding: '36px',
								}}>
								<p>Perfect Creative Space</p>
							</div>
						</Image>
					</div>
				</div>
			</div>

			<div className="Site-container" style={{ marginTop: '180px', zIndex: '1' }}>
				<div className="row">
					<div className="col-4 offset-md-1">
						<StaticImage
							src="../images/map.png"
							width={393}
							quality={95}
							formats={['AUTO', 'WEBP', 'AVIF']}
							alt="Office"
							style={{ display: 'inline-block', verticalAlign: 'middle' }}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
