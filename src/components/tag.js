import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.div`
display: inline-block;
padding: 22px 28px 23px 33px;
	background: var(--white);
	opacity: 0.98;
	box-shadow: 20px 20px 30px rgba(var(--black), 0.1);
	font-weight: 800;
	font-size: 15px;
	line-height: ${19 / 15};
	border-radius: 40px;
	border-bottom-right-radius: 5px;

	transform: translate3d(0, 100%, 0);
	opacity: 0;
	will-change: transform, opacity;
	transition: transform 1.5s var(--ease-out-expo), opacity 1.5s var(--ease-out-expo);

	.font-family-cursive {
		font-size: 26px;
		line-height: ${26 / 19};
		font-weight: 400;
		color: var(--blue-pure);
	}


	&.is-inview {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

const Tag = ({ style }) => (
	<StyledTag style={style} data-scroll>
		<StaticImage
			src="../images/phone.png"
			width={37}
			height={37}
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt="Phone"
			style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '9px' }}
		/>
		Perfect for <span className="font-family-cursive">Private calls</span>
	</StyledTag>
);

Tag.defaultProps = {
	style: {}
};
Tag.propTypes = {
	style: PropTypes.object
};

export default Tag;
