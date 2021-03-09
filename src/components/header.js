import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import SiteLogo from './site-logo';
import Menu from './menu';
import Login from './login';

const StyledHeader = styled.header`
opacity: 0;
	transform: translate3d(0, -100%, 0);
	will-change: transform;
	transition: transform 1.5s var(--ease-out-expo), opacity 1.5s var(--ease-out-expo);
	padding-top: 51px;
	padding-bottom: 63px;

	&.is-inview {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

const Header = () => (
	<StyledHeader data-scroll>
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

// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
