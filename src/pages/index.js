import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled, { keyframes } from 'styled-components';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap } from 'gsap';

import SiteContainer from '../components/site-container';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Input from '../components/input';
import Tag from '../components/tag';
import Arrow from '../components/arrow';
import Card from '../components/card';

import Work from '../images/svg/work.inline.svg';

const H2 = styled.h2`
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
	border-bottom-right-radius: 40px;
	border-bottom-left-radius: 40px;

	img {
		image-rendering: high-quality;
	}

	& > div {
		border-radius: 40px;
		overflow: hidden;

		width: 440px;
		max-width: 100%;
		animation-name: ${heartBeat};
		animation-timing-function: var(--ease-out-expo);
		animation-duration: 2s;
		animation-play-state: paused;
	}

	&.is-inview div {
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
				scaleX: `${387 / 440}`,
				scaleY: `${204 / 812}`,
			},
			'start',
		);
		tl.current.fromTo(
			imageRef.current.querySelector('.js-image'),
			{ scaleX: 1, scaleY: 1 },
			{
				scaleX: `${440 / 387}`,
				scaleY: `${812 / 204}`,
			},
			'start',
		);
		tl.current.fromTo(
			imageRef.current.querySelector('div'),
			{ borderRadius: '40px' },
			{
				borderRadius: '20px',
			},
			'start',
		);
		// tl.current.fromTo(
		// 	imageRef.current.querySelector('.js-body'),
		// 	{ scaleX: 1, scaleY: 1, opacity: 0 },
		// 	{
		// 		scaleX: `${1 / (387 / 440)}`,
		// 		scaleY: `${1 / (204 / 812)}`,
		// 		opacity: 1,
		// 	},
		// 	'start',
		// );
	});

	useEffect(() => {
		if (scroll) {
			scroll.on('scroll', ({ scroll, limit }) => {
				const progress = scroll.y / limit.y;

				tl.current.progress(progress * 4);
			});
		}
	}, [scroll]);

	return (
		<Layout>
			<SEO title="Home" />

			<SiteContainer>
				<div className="row" style={{ position: 'relative', zIndex: '2' }}>
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
					<div className="col-5 position-relative d-flex justify-content-end">
						<Tag
							className="js-tag"
							style={{
								position: 'absolute',
								zIndex: '1',
								bottom: '280px',
								left: '0',
							}}
						/>
						<Tag
							className="js-tag"
							style={{
								position: 'absolute',
								zIndex: '1',
								bottom: '160px',
								left: '-60px',
							}}
						/>
						<Image data-scroll ref={imageRef}>
							<div>
								<StaticImage
									className="js-image"
									src="../images/office.png"
									width={440}
									height={812}
									quality={95}
									formats={['AUTO', 'WEBP', 'AVIF']}
									alt="Office"
									style={{ display: 'inline-block', verticalAlign: 'middle' }}
								/>
							</div>
						</Image>
					</div>
				</div>

				<Work
					style={{
						fill: 'var(--blue-light-grayish)',
						position: 'absolute',
						margin: 'auto',
						maxWidth: '100%',
					}}
				/>

				<div
					className="row"
					style={{ position: 'relative', marginTop: '180px', zIndex: '1' }}>
					<div className="col-4 offset-md-1">
						<Card
							style={{
								position: 'absolute',
								top: '0',
								right: '0',
								zIndex: '1',
								transform: 'translate3d(calc(50% - 6px), 0, 0)',
							}}
						/>
						<StaticImage
							src="../images/map.png"
							width={393}
							quality={95}
							formats={['AUTO', 'WEBP', 'AVIF']}
							alt="Office"
							style={{
								minWidth: '393px',
								display: 'inline-block',
								verticalAlign: 'middle',
								marginLeft: `${(40 / 400) * 100}%`,
							}}
						/>
					</div>
					<div className="col-5 offset-md-2">
						<H2 data-scroll>
							<span>Right</span> <span style={{ transitionDelay: '0.1s' }}>in</span>{' '}
							<span style={{ transitionDelay: '0.2s' }}>your</span>{' '}
							<span
								className="font-family-cursive color-yellow-bright"
								style={{
									marginTop: '21px',
									color: 'var(--yellow-bright)',
									transitionDelay: '0.3s',
								}}>
								Neighborhood
							</span>
						</H2>
						<p
							style={{
								color: 'var(--blue-dark-grayish)',
								marginRight: `${(2 / 5) * 100}%`,
							}}>
							Bike or walk to work. Have something to look forward to. Get your work
							done around others, just a few blocks from home
						</p>
					</div>
				</div>
			</SiteContainer>

			<SiteContainer style={{ marginTop: '180px', marginBottom: '180px' }}>
				<div className="row">
					<div className="col-4 offset-md-1">
						<div style={{ marginLeft: `${(40 / 400) * 100}%` }}>
							<H2 data-scroll>
								<span>Exclusive</span>{' '}
								<span style={{ transitionDelay: '0.1s' }}>access</span>{' '}
								<span
									className="font-family-cursive color-yellow-bright"
									style={{
										marginTop: '5px',
										color: 'var(--cyan-bright)',
										transitionDelay: '0.3s',
									}}>
									Anywhere
								</span>
							</H2>
							<p style={{ color: 'var(--blue-dark-grayish)' }}>
								Codi is members-only. Book a workspace nationwide for one price.
								Start a free trial now & watch your productivity skyrocket.
							</p>
						</div>
					</div>
					<div className="col-7">
						<StaticImage
							src="../images/cycling-lady.png"
							width={730}
							quality={95}
							formats={['AUTO', 'WEBP', 'AVIF']}
							alt="Cycling lady"
							style={{
								display: 'inline-block',
								verticalAlign: 'middle',
							}}
						/>
					</div>
				</div>
			</SiteContainer>

			<SiteContainer style={{ marginTop: '180px', marginBottom: '180px' }}>
				<div className="row">
					<div className="col-12">
						<H2 data-scroll style={{ textAlign: 'center' }}>
							<span>Everything</span>{' '}
							<span style={{ transitionDelay: '0.1s' }}>you</span>
							<br />
							<span style={{ transitionDuration: '0.2s' }}>need</span>{' '}
							<span style={{ transitionDuration: '0.3s' }}>for</span>{' '}
							<span
								className="font-family-cursive color-yellow-bright"
								style={{
									marginTop: '5px',
									color: 'var(--blue-pure)',
									transitionDelay: '0.4s',
								}}>
								Work
							</span>
						</H2>
					</div>
				</div>
			</SiteContainer>
		</Layout>
	);
};

export default IndexPage;
