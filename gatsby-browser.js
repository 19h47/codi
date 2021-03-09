/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';

import { Wrap } from './src/components/wrap';

export const wrapRootElement = ({ element }) => <Wrap>{element}</Wrap>;
