import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
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
		<SEO title="Home" />
		<H1>Hi people</H1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<StaticImage
			src="../images/gatsby-astronaut.png"
			width={300}
			quality={95}
			formats={['AUTO', 'WEBP', 'AVIF']}
			alt="A Gatsby astronaut"
			style={{ marginBottom: `1.45rem` }}
		/>
		<p>
			<Link to="/page-2/">Go to page 2</Link> <br />
			<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
		</p>
	</Layout>
);

export default BecomeAHost;
