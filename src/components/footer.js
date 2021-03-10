import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import menus from '../../content/menus.json';

import ArrowRight from '../images/svg/arrow-right.inline.svg';
import AppStore from '../images/svg/app-store.inline.svg';
import PlayStore from '../images/svg/play-store.inline.svg';
import Socials from './socials';

const StyledFooter = styled.footer`
	padding-top: 140px;
	padding-bottom: 66px;
	background: linear-gradient(0deg, var(--blue-vivid), var(--blue-vivid)), var(--blue-pure);
	border-top-right-radius: 100px;
	border-top-left-radius: 100px;
`;

const Title = styled.h3`
	color: var(--white);
	margin: 0;

	.font-family-cursive {
		font-size: 70px;
		line-height: ${60 / 70};
		margin-right: 10px;
		color: var(--yellow-bright);
		font-weight: 400;
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

const HorizontalLine = styled.hr`
	background-color: var(--white);
	opacity: 0.3;
	border: none;
	height: 1px;

	&[data-scroll] {
		transform: scaleX(0);
		transform-origin: 0 center;
		transition: transform 1.5s var(--ease-out-expo);
		will-change: transform;
	}

	&[data-scroll].is-inview {
		transform: scaleX(1);
	}
`;

const Ul = styled.ul`
	list-style-type: none;
	color: var(--white);

	a {
		display: inline-block;
		font-weight: 500;
		font-size: 16px;
		line-height: ${36 / 16};
		transition: opacity 0.5s var(--ease-out-expo);
		will-change: opacity;

		&:focus,
		&:hover {
			opacity: 0.7;
		}
	}

	&[data-scroll] li {
		transform: translate3d(0, 100%, 0);
		opacity: 0;
		will-change: transform, opacity;
		transition: transform 1.5s var(--ease-out-expo), opacity 1.5s var(--ease-out-expo);
	}

	&.is-inview li {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

const StyledArrowRight = styled(ArrowRight)`
	margin-left: 17px;
	fill: var(--red-very-dark-grayish);
`;

const StyledAppStore = styled(AppStore)`
	width: 29px;
	height: 29px;
	margin-right: 17px;
	fill: var(--white);
`;

const StyledPlayStore = styled(PlayStore)`
	width: 29px;
	height: 29px;
	margin-right: 17px;
	fill: var(--white);
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div className="Site-container">
				<div className="row d-flex align-items-center" style={{ marginBottom: '71px' }}>
					<div className="col-6">
						<Title data-scroll>
							<span>Become</span> <span style={{ transitionDelay: '0.1s' }}>a</span>{' '}
							<span style={{ transitionDelay: '0.2s' }}>Codi</span>
							<br />
							<span
								className="font-family-cursive"
								style={{ transitionDelay: '0.3s' }}>
								host
							</span>
							<span style={{ transitionDelay: '0.4s' }}>now</span><span style={{ transitionDelay: '0.5s' }}>.</span>
						</Title>
					</div>
					<div className="col-6 d-flex justify-content-end">
						<button className="Button" type="button">
							Get started
							<StyledArrowRight />
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<HorizontalLine data-scroll />
					</div>
				</div>
				<div className="row" style={{ marginTop: '87px' }}>
					{menus.footer.map((item, index) => {
						const child = item.items.map((child, childIndex) => (
							<li
								key={childIndex}
								style={{ transitionDelay: `${childIndex * 0.1}s` }}>
								<Link to={child.link}>{child.title}</Link>
							</li>
						));

						return (
							<div className="col-3" key={index}>
								<Ul data-scroll>
									<li>
										<h4 style={{ marginBottom: '42px' }}>{item.title}</h4>
									</li>
									{child}
								</Ul>
							</div>
						);
					})}
				</div>
				<div className="row" style={{ marginTop: '207px' }}>
					<div className="col-12">
						<button
							className="Button Button--has-border Button--is-white"
							type="button"
							style={{ marginRight: '25px' }}>
							<StyledAppStore />
							App Store
						</button>
						<button
							className="Button Button--has-border Button--is-white"
							type="button">
							<StyledPlayStore />
							Play Store
						</button>
					</div>
				</div>
				<div className="row d-flex align-items-center" style={{ marginTop: '28px' }}>
					<div className="col-6" style={{ fontWeight: '500', color: 'var(--white)' }}>
						<span style={{ fontSize: '16px', lineHeight: '29px' }}>
							© 2020 Codi. All rights reserved.
						</span>
						<ul
							style={{
								listStyleType: 'none',
								display: 'flex',
								fontSize: '14px',
								lineHeight: '24px',
							}}>
							<li style={{ opacity: '0.5', marginRight: '12px' }}>Privacy</li>
							<li style={{ opacity: '0.5', marginRight: '12px' }}>Terms</li>
							<li style={{ opacity: '0.5' }}>Sitemap</li>
						</ul>
					</div>
					<div className="col-6 d-flex justify-content-end">
						<Socials />
					</div>
				</div>
			</div>
		</StyledFooter>
	);
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
