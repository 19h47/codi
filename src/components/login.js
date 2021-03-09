import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLogin = styled.div``;

const Ul = styled.ul`
	list-style-type: none;
	margin: 0 -6px;
	display: flex;
`;

const Li = styled.li`
	position: relative;
	margin: 0 12px;

	&:first-child {
		margin-left: 0;

		a {
			color: var(--black);

			&:focus,
			&:hover {
				color: var(--blue-pure);
			}
		}
	}

	&:last-child {
		margin-right: 0;

		a {
			color: var(--blue-pure);

			&:focus,
			&:hover {
				color: var(--black);
			}
		}

		&::after {
			content: none;
		}
	}

	&::after {
		margin-right: -12px;
		width: 1px;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: var(--blue-dark-grayish);
		opacity: 0.2;
		content: '';
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: 6px;
	transition: color 0.5s var(--ease-out-expo);
	will-change: color;
	line-height: 18px;
	letter-spacing: -0.09px;
	font-weight: 700;
`;

const Login = () => (
	<StyledLogin>
		<Ul>
			<Li>
				<StyledLink to="/">Login</StyledLink>
			</Li>
			<Li>
				<StyledLink to="/">Signup</StyledLink>
			</Li>
		</Ul>
	</StyledLogin>
);

// Login.propTypes = {};
// Login.defaultProps = {};

export default Login;
