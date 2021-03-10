import React from 'react';
import PropTypes from 'prop-types';

const SiteContainer = ({ children, style }) => (
	<div className="Site-container" style={style}>
		{children}
	</div>
);

SiteContainer.propTypes = {
	children: PropTypes.node.isRequired,
	style: PropTypes.object
};
SiteContainer.defaultProps = {
	style: {}
};

export default SiteContainer;
