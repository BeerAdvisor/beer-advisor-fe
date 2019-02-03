import { css } from 'styled-components';

export const EXTRA_LARGE_BP = css`@media (max-width: ${props => props.theme.breakpoints.values.xl}px)`;
export const LARGE_BP = css`@media (max-width: ${props => props.theme.breakpoints.values.lg}px)`;
export const MEDIUM_BP = css`@media (max-width: ${props => props.theme.breakpoints.values.md}px)`;
export const SMALL_BP = css`@media (max-width: ${props => props.theme.breakpoints.values.sm}px)`;
