import styled from 'styled-components';
import { InputLabel } from '@material-ui/core';

import theme from '../../../../theme';

export const ValuesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 1rem;
    margin-top: .4rem;
`;

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    margin: 1.5rem 1rem 0;
`;

export const SliderWrapper = styled.div`
    margin-top: 1rem;
`;

export const SliderLabel = styled(InputLabel)`
    left: -0.2rem;
`;

export const trackStyle = {
    backgroundColor: theme.palette.primary.light,
    height: 10,
};

export const handlerStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginLeft: '-8px',
    marginTop: '-8px',
    height: 0,
    width: 0,
};

export const railStyle = {
    backgroundColor: '#DDD',
    borderColor: '#DDD',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: 10,
};
