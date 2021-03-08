import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Logo from '../images/svg/logo.inline.svg';

const StyledLink = styled(Link)`
	display: block;
`;

const StyledLogo = styled(Logo)`
	fill: var(--blue-pure);
`;

const SiteLogo = () => (
	<StyledLink to="/">
		<StyledLogo />
	</StyledLink>
);

SiteLogo.propTypes = {};

SiteLogo.defaultProps = {};

export default SiteLogo;
