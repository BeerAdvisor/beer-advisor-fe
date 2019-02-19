import styled from 'styled-components';

import theme from '../../../theme';

export const ValuesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const LabelContainer = styled.div`
    text-align: center;
`;

export const SliderContainer = styled.div`
    min-width: 150px;
    flex-grow: 1;
    margin: 24px 10px 0 10px;
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
