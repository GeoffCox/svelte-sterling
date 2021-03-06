/* eslint-disable @typescript-eslint/no-explicit-any */

import type { CSSVarSet } from '../types';
import { neutrals } from './colors';
import { theme } from './useTheme';

export const darkThemeVars: CSSVarSet = {
	// ----- Common ---- //
	'--Common__background-color': neutrals.neutral15,
	'--Common__border-color': neutrals.neutral92,
	'--Common__border-radius': '0',
	'--Common__border-style': 'solid',
	'--Common__border-width': '2px',
	'--Common__color': neutrals.neutral100,

	// hover
	'--Common__background-color--hover': neutrals.neutral15,
	'--Common__border-color--hover': neutrals.neutral96,
	'--Common__color--hover': neutrals.neutral100,

	// focus
	'--Common__background-color--focus': neutrals.neutral45,
	'--Common__border-color--focus': neutrals.neutral100,
	'--Common__color--focus': neutrals.neutral100,

	// outline
	'--Common__outline-color': neutrals.neutral100,
	'--Common__outline-offset': '0',
	'--Common__outline-style': 'solid',
	'--Common__outline-width': '2px',

	// disabled
	'--Common__background-color--disabled': neutrals.neutral45,
	'--Common__border-color--disabled': neutrals.neutral92,
	'--Common__color--disabled': neutrals.neutral92,

	// ----- BaseLayer ---- //
	'--BaseLayer__background-color': neutrals.neutral15,
	'--BaseLayer__color': neutrals.neutral100,

	'--BaseLayer__background-color--1': neutrals.neutral30,
	'--BaseLayer__color--1': neutrals.neutral100,

	'--BaseLayer__background-color--2': neutrals.neutral45,
	'--BaseLayer__color--2': neutrals.neutral100,

	'--BaseLayer__background-color--3': neutrals.neutral60,
	'--BaseLayer__color--3': neutrals.neutral100,

	// ----- Button ----- //

	'--Button__background-color': neutrals.neutral45,
	'--Button__border-color': neutrals.neutral92,
	'--Button__border-radius': '8px',
	'--Button__border-style': 'solid',
	'--Button__border-width': '2px',
	'--Button__color': neutrals.neutral100,

	// hover
	'--Button__background-color--hover': neutrals.neutral45,
	'--Button__border-color--hover': neutrals.neutral96,
	'--Button__color--hover': neutrals.neutral100,

	// active
	'--Button__background-color--active': neutrals.neutral60,
	'--Button__border-color--active': neutrals.neutral98,
	'--Button__color--active': neutrals.neutral98,

	// focus
	'--Button__background-color--focus': neutrals.neutral45,
	'--Button__border-color--focus': neutrals.neutral100,
	'--Button__color--focus': neutrals.neutral100,

	// disabled
	'--Button__background-color--disabled': neutrals.neutral75,
	'--Button__border-color--disabled': neutrals.neutral92,
	'--Button__color--disabled': neutrals.neutral92,

	// ----- Input ----- //
	'--Input__background-color': neutrals.neutral30,
	'--Input__border-color': neutrals.neutral92,
	'--Input__border-radius': '3px',
	'--Input__border-style': 'solid',
	'--Input__border-width': '2px',
	'--Input__color': neutrals.neutral100,
	'--Input__placeholder__color': neutrals.neutral75,

	// hover
	'--Input__background-color--hover': neutrals.neutral15,
	'--Input__border-color--hover': neutrals.neutral96,
	'--Input__color--hover': neutrals.neutral100,

	// focus
	'--Input__background-color--focus': neutrals.neutral15,
	'--Input__border-color--focus': neutrals.neutral100,
	'--Input__color--focus': neutrals.neutral100,

	// selected
	'--Input__background-color--selected': neutrals.neutral60,
	'--Input__border-color--selected': neutrals.neutral98,
	'--Input__color--selected': neutrals.neutral100,

	// disabled
	'--Input__background-color--disabled': neutrals.neutral45,
	'--Input__border-color--disabled': neutrals.neutral85,
	'--Input__color--disabled': neutrals.neutral85,
	'--Input__placeholder__color--disabled': neutrals.neutral75,

	// ----- Display ----- //
	'--Display__background-color': neutrals.neutral60,
	'--Display__border-color': neutrals.neutral92,
	'--Display__color': neutrals.neutral100,

	'--Display__color--info': '#025E73',
	'--Display__color--progress': '#0099DD',
	'--Display__color--success': '#03A64A',
	'--Display__color--warning': '#F2A71B',
	'--Display__color--error': '#A62B1F'
};

export const darkTheme = (node: HTMLElement) => {
	return theme(node, darkThemeVars);
};
