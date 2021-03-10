import React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const H1 = styled.h1`
	text-align: center;

	.font-family-cursive {
		display: block;
		margin-top: 80px;
		color: var(--blue-pure);
	}
`;

const BecomeAHost = () => (
	<Layout>
		<SEO title="Become a host" />
		<H1>Hi people</H1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		{/* <StaticImage
			src="../images/gatsby-astronaut.png"
			width={300}
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt="A Gatsby astronaut"
			style={{ marginBottom: `1.45rem` }}
		/> */}
	</Layout>
);

export default BecomeAHost;
