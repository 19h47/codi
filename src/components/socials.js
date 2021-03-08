import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import socials from '../../content/socials.json';

import Twitter from '../images/svg/twitter.inline.svg';
import LinkedIn from '../images/svg/linkedin.inline.svg';
import Facebook from '../images/svg/facebook.inline.svg';
import Instagram from '../images/svg/instagram.inline.svg';

const StyledSocials = styled.div``;

const Ul = styled.ul`
	list-style-type: none;
	display:flex;
`;

const Li = styled.li`
	margin: 0 7px;

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
`;

const StyledA = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-color: var(--white);

	svg {
		width: 18px;
		height: 18px;
		fill: var(--blue-pure);
	}
`;

const SocialIcons = {
	Twitter,
	LinkedIn,
	Facebook,
	Instagram,
};

const Socials = () => (
	<StyledSocials>
		<Ul>
			{socials.map(social => {
				const Icon = SocialIcons[social.title];

				return (
					<Li key={social.id}>
						<StyledA
							href={social.link}
							aria-label={social.title}
							rel="noreferrer noopener">
							<Icon />
						</StyledA>
					</Li>
				);
			})}
		</Ul>
	</StyledSocials>
);

Socials.propTypes = {};

Socials.defaultProps = {};

export default Socials;
