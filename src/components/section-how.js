import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import SiteContainer from '../components/site-container';

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

const SectionHow = ({ style }) => {
	const {
		allWorkJson: { nodes: work },
	} = useStaticQuery(graphql`
		query WorkQuery {
			allWorkJson {
				nodes {
					title
					content
					icon {
						childImageSharp {
							gatsbyImageData(layout: FIXED, width: 80)
						}
					}
				}
			}
		}
	`);

	return (
		<SiteContainer style={style}>
			<div className="row">
				<div className="col-12">
					<H2 data-scroll style={{ textAlign: 'center' }}>
						<span>Everything</span> <span style={{ transitionDelay: '0.1s' }}>you</span>
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

			<div className="row" style={{ marginTop: '180px' }}>
				<div className="col-12 col-md-10 offset-md-1">
					<div className="row" style={{ marginTop: '-50px', marginBottom: '-50px' }}>
						{work.map((work, index) => {
							const image = getImage(work.icon);

							return (
								<div
									key={index}
									className="col-4"
									style={{ marginTop: '50px', marginBottom: '50px' }}>
									<GatsbyImage
										image={image}
										width={80}
										imgStyle={{ height: '80px' }}
										quality={95}
										objectFit="contain"
										formats={['AUTO', 'WEBP', 'AVIF']}
										alt={work.title}
										style={{
											marginBottom: '50px',
											height: '80px',
											display: 'inline-block',
											verticalAlign: 'middle',
										}}
									/>
									<h3 style={{ fontSize: '20px', lineHeight: 24 / 20 }}>
										{work.title}
									</h3>
									<p
										style={{
											fontSize: '13px',
											lineHeight: 21 / 13,
											color: 'var(--blue-dark-grayish)',
										}}>
										{work.content}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</SiteContainer>
	);
};

// SectionHow.propTypes = {};
// SectionHow.defaultProps = {};

export default SectionHow;
