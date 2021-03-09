import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Marker from '../images/svg/marker.inline.svg';

const StyledInput = styled.div`
	display: flex;
	padding: 21px 20px;
	box-shadow: 0px 0px 0px 4px var(--blue-very-soft);
	border-radius: 10px;
	border: 1px solid var(--blue-pure);

	transform: translate3d(0, 100%, 0);
	opacity: 0;
	will-change: transform, opacity;
	transition: transform 1.5s var(--ease-out-expo), opacity 1.5s var(--ease-out-expo);

	label {
		font-size: 11px;
		line-height: ${13.31 / 11};
		font-weight: 600;
		color: var(--blue-pure);
	}

	input {
		font-size: 16px;
		line-height: ${19.36 / 16};
		font-weight: 400;
		width: 100%;

		&:focus {
			outline: none;
		}
	}

	&.is-inview {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
`;

const Icons = {
	Marker,
};

const Input = ({ label, icon, id, style }) => {
	const Icon = Icons[icon];
	const inputRef = useRef(null);

	const handleFocus = () => inputRef.current.focus();

	return (
		<StyledInput tabIndex="0" onFocus={handleFocus} data-scroll style={style}>
			<Icon style={{ fill: 'var(--blue-pure)', width: '18px', height: '22px' }} />
			<div className="d-flex flex-column" style={{ marginLeft: '15px', width: '100%' }}>
				<label htmlFor={id}>{label}</label>
				<input id={id} type="text" tabIndex="-1" ref={inputRef} />
			</div>
		</StyledInput>
	);
};

Input.defaultProps = {
	id: 'input',
	label: 'Label',
	icon: 'Marker',
	style: {}
};

Input.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	icon: PropTypes.string,
	style: PropTypes.object
};

export default Input;
