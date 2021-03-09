/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from 'react';

import { Wrap } from './src/components/wrap';

export const wrapRootElement = ({ element }) => <Wrap>{element}</Wrap>;
