import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SiteLogo from './site-logo';
import Menu from './menu';
import Login from './login';

const StyledHeader = styled.header`
	padding-top: 51px;
	padding-bottom: 63px;
`;

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<div className="Site-container">
			<div className="row d-flex align-items-center">
				<div className="col-2">
					<SiteLogo />
				</div>
				<div className="col-8">
					<Menu />
				</div>
				<div className="col-2 d-flex justify-content-end">
					<Login />
				</div>
			</div>
		</div>
	</StyledHeader>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
