import React from 'react';
import styled from 'styled-components';
import SvgIcon from '@material-ui/core/SvgIcon';

const BeerIconStyled = styled(SvgIcon)`
        font-size: 30px;
        position: relative;
        bottom: 4px;
        right: 13px;
        color: ${props => props.theme.palette.primary.light};
`;

export const BeerIcon = (props: any) => (
        <BeerIconStyled {...props}>
            <path d='M15.23,11a2.58,2.58,0,0,0-.18-.91,5.94,5.94,0,0,0-.68-1,2.54,2.54,0,0,1-.57-1.58c0-.92-.08-2.53-.2-3.57s-.22-2.07-.23-2.08,0-.06,0-.07a.37.37,0,0,0,.3-.35V.37A.39.39,0,0,0,13.22,0H11a.39.39,0,0,0-.41.37V1.45a.37.37,0,0,0,.29.35h0s0,.07,0,.08-.11,1-.23,2.08-.19,2.64-.19,3.56A2.54,2.54,0,0,1,9.86,9.1a5.92,5.92,0,0,0-.69,1A2.58,2.58,0,0,0,9,11H9c0,.08,0,.15,0,.23V23c0,.12,0,.23,0,.31,0,.24.4.66,3.13.66,2.51,0,3.08-.34,3.13-.66h0V11Z' />
        </BeerIconStyled>
);

export default BeerIcon;
