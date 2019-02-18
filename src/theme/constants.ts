import { css } from 'styled-components';

export const EXTRA_LARGE_BP_UP = css`@media (min-width: ${props => props.theme.breakpoints.values.xl}px)`;
export const LARGE_BP_UP = css`@media (min-width: ${props => props.theme.breakpoints.values.lg}px)`;
export const MEDIUM_BP_UP = css`@media (min-width: ${props => props.theme.breakpoints.values.md}px)`;
export const SMALL_BP_UP = css`@media (min-width: ${props => props.theme.breakpoints.values.sm}px)`;
