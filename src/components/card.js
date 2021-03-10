import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from '../images/svg/star.inline.svg';

const StyledCard = styled.div`
	background-color:var(--white);
	padding: 6px;
	border-radius: 20px;
	width: 400px;

	&[data-scroll] {
		opacity: 0;
		will-change: opacity;
		transition: opacity 2.5s var(--ease-out-expo);
	}

	&.is-inview {
		opacity: 1;
	}
`;

const Card = ({ style }) => {
	return (
		<StyledCard style={style} data-scroll data-scroll-repeat>
			<div style={{ height: '72px' }}></div>
			<div style={{ padding: '30px' }}>
				<h5>Perfect Creative Space</h5>
				<p className="margin-bottom-0">Mission District, San Francisco, CA</p>

				<div className="d-flex align-items-center" style={{ marginTop: '24px' }}>
					<button
						className="Button Button--is-yellow"
						type="button"
						style={{ padding: '8px 14px' }}>
						<Star style={{ width: '16px', height: '16px', marginRight: '6px' }} />
					5.0
				</button>
					<span role="img" aria-label="Grinning face" style={{ marginLeft: '12px', fontSize: '11px', lineHeight: 13 / 11 }}>
						😀
				</span>
					<span
						style={{
							marginLeft: '4px',
							letterSpacing: '0.02em',
							fontWeight: '600',
							color: 'var(--cyan-strong)',
							textTransform: 'uppercase',
							fontSize: '10px',
							lineHeight: 13 / 11,
						}}>
						member
				</span>
				</div>
			</div>
		</StyledCard>
	);
};

Card.defaultProps = {
	style: PropTypes.object,
	className: '',
};
Card.defaultProps = {
	style: {},
	className: PropTypes.string,
};

export default Card;
