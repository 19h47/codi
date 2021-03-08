import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import data from '../../content/menu.json';
import Heart from '../images/svg/heart.inline.svg';

const StyledMenu = styled.div``;

const Ul = styled.ul`
	margin: 0 -6px;
	display: flex;
	list-style-type: none;
`;

const Li = styled.li`
	margin: 0 20px;

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: 6px;
	color: ${props => (props.icon ? 'var(--blue-pure)' : 'var(--blue-dark-grayish)')};
	transition: color 0.5s var(--ease-out-expo);
	will-change: color;
	line-height:18px;
	font-weight: 500;

	&:focus,
	&:hover {
		color: ${props => (props.icon ? 'var(--blue-dark-grayish)' : 'var(--blue-pure)')};

		svg {
			fill: ${props => (props.icon ? 'var(--blue-dark-grayish)' : 'var(--blue-pure)')};
		}
	}
`;

const StyledHeart = styled(Heart)`
	margin-right: 6px;
	fill: ${props => props.fill};
	transition: fill 0.5s var(--ease-out-expo);
	will-change: fill;
`;

const Menu = () => (
	<StyledMenu>
		<Ul>
			{data.map((item, index) => (
				<Li key={index}>
					<StyledLink to={item.link} icon={item.icon}>
						{item.icon && <StyledHeart fill="#0078ff" />}
						{item.title}
					</StyledLink>
				</Li>
			))}
		</Ul>
	</StyledMenu>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
