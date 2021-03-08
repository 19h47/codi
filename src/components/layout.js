/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Header from './header';
import Footer from './footer';

import '../stylesheets/styles.scss';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<main>{children}</main>
			<div className="Site-container" style={{ marginBottom: '-49px' }}>
				<div className="row">
					<div className="col-11 d-flex justify-content-end">
						<StaticImage
							src="../images/working-lady.png"
							width={485}
							height={388}
							quality={95}
							formats={['AUTO', 'WEBP', 'AVIF']}
							alt="A lady"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
