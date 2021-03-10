import React from 'react';
// import { Link } from "gatsby"
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import pages from '../content/about-page.json';

import Layout from '../components/layout';
import SEO from '../components/seo';

const H1 = styled.h1`
	text-align: center;

	.font-family-cursive {
		display: block;
		margin-top: 80px;
		color: var(--blue-pure);
	}
`;

const Content = styled.p`
	color: var(--blue-dark-grayish);
	font-size: 28px;
	line-height: ${40 / 28};
`;

const OurValues = styled.div`
	margin: 100px 0;
	padding: 112px 0 0 0;
	position: relative;

	&::after {
		margin: 0 ${(1 / 12) * 100}%;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 100px;
		background-color: var(--blue-light-grayish);
		content: '';
		z-index: 1;
	}

	p {
		color: var(--blue-dark-grayish);
		font-size: 18px;
		line-height: ${25 / 18};
		font-weight: 400;
	}

	ul {
		margin: 36px 0 245px 0;
		list-style-type: none;
		columns: 2;
	}

	li {
		display: flex;
		margin: 20px 0;
		font-size: 15px;
		line-height: ${22 / 15};
		font-weight: 700;

		&:first-child {
			margin-top: 0;
		}

		&::last-child {
			margin-bottom: 0;
		}

		&::before {
			display: flex;
			margin: 10px 14px 0 0;
			width: 19px;
			height: 2px;
			background-color: var(--black);
			content: '';
		}
	}
`;

const OurStory = styled.div`
	margin: 100px 0;

	p {
		color: var(--blue-dark-grayish);
		font-size: 18px;
		line-height: ${25 / 18};
		font-weight: 400;
	}
`;

const About = () => (
	<Layout>
		<SEO title="About" />
		<div className="Site-container">
			<div className="row">
				<div className="col-12">
					<H1>
						The Coworking
						<br />
						<span className="font-family-cursive">Movement</span>
					</H1>
				</div>
				<div className="col-12 col-md-4 offset-md-2">
					<Content>{pages.content}</Content>
				</div>
			</div>
		</div>

		<OurStory>
			<div className="Site-container">
				<div className="row" style={{ marginBottom: '75px' }}>
					<div className="col-12">
						<h2 className="text-align-center margin-0">
							Our{' '}
							<span
								className="font-family-cursive"
								style={{ color: 'var(--yellow-bright)' }}>
								Story
						</span>
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-4 offset-md-2">
						<p>{pages.story.content[0]}</p>
					</div>
					<div className="col-4">
						<p>{pages.story.content[1]}</p>
					</div>
				</div>
			</div>
		</OurStory>

		<OurValues>
			<div className="Site-container" style={{ zIndex: '2', position: 'relative' }}>
				<div className="row" style={{ marginBottom: '75px' }}>
					<div className="col-12 col-md-10 offset-md-1">
						<h2 className="text-align-center margin-0">
							Our{' '}
							<span
								className="font-family-cursive"
								style={{ color: 'var(--cyan-bright)' }}>
								Values
							</span>
						</h2>
					</div>
				</div>
				<div className="row d-flex align-items-end">
					<div className="col-4 offset-2">
						<p>{pages.values.content}</p>
						<ul>
							{pages.values.items.map(item => (
								<li>{item}</li>
							))}
						</ul>
					</div>
					<div className="col-6" style={{ marginBottom: '-54px' }}>
						<StaticImage
							src="../images/cycling-lady.png"
							width={620}
							height={402}
							quality={95}
							formats={['AUTO', 'WEBP', 'AVIF']}
							alt="Cycling lady"
						/>
					</div>
				</div>
			</div>
		</OurValues>
		<div className="Site-container">
			<div className="row">
				<div className="col-12">
					<h2>
						Our{' '}
						<span
							className="font-family-cursive"
							style={{ color: 'var(--blue-vivid)' }}>
							Team
						</span>
					</h2>
				</div>
			</div>
		</div>
	</Layout>
);

export default About;
