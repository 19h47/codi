import React, { useRef, useLayoutEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Svg = styled.svg``;

const Arrow = () => {
	const svgRef = useRef(null);

	useLayoutEffect(() => {
		gsap.fromTo(
			svgRef.current.children,
			{ fill: '#423F3F' },
			{
				fill: '#0078FF',
				ease: 'power4.out',
				duration: svgRef.current.children.length,
				stagger: { each: 0.1, yoyo: true, repeat: -1 },
			},
		);
	});

	return (
		<Svg
			width="9"
			height="55"
			viewBox="0 0 9 55"
			xmlns="http://www.w3.org/2000/svg"
			ref={svgRef}>
			<path style={{ fill: '#423F3F' }} d="M6,1.5C6,2.3,5.3,3,4.5,3S3,2.3,3,1.5C3,0.7,3.7,0,4.5,0S6,0.7,6,1.5z" />
			<path style={{ fill: '#423F3F' }} d="M6,10.4c0,0.8-0.7,1.5-1.5,1.5S3,11.2,3,10.4c0-0.8,0.7-1.5,1.5-1.5S6,9.6,6,10.4z" />
			<path style={{ fill: '#423F3F' }} d="M6,18.6c0,0.8-0.7,1.5-1.5,1.5S3,19.4,3,18.6c0-0.8,0.7-1.5,1.5-1.5S6,17.8,6,18.6z" />
			<path style={{ fill: '#423F3F' }} d="M6,27.3c0,0.8-0.7,1.5-1.5,1.5S3,28.1,3,27.3c0-0.8,0.7-1.5,1.5-1.5S6,26.4,6,27.3z" />
			<path style={{ fill: '#423F3F' }} d="M6,35.4c0,0.8-0.7,1.5-1.5,1.5S3,36.2,3,35.4s0.7-1.5,1.5-1.5S6,34.6,6,35.4z" />
			<path style={{ fill: '#423F3F' }} d="M4.5,55L4.5,55L4.5,55c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0h0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.3-0.2c0,0,0,0-0.1-0.1l-3.5-4c-0.4-0.4-0.3-1,0.1-1.4c0.4-0.4,1-0.3,1.4,0.1l1.7,2v-4.8c0-0.5,0.4-1,1-1s1,0.4,1,1v4.8l1.7-2c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4l-3.5,4c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0.1c0,0,0,0,0,0C4.6,55,4.5,55,4.5,55z" />
		</Svg>
	);
};

Arrow.defaultProps = {};
Arrow.propTypes = {};

export default Arrow;
