import styled from 'styled-components';

export const ValuesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const LabelContainer = styled.div`
    text-align: center;
`;

export const SliderContainer = styled.div`
    min-width: 450px;
    margin-top: 60px;
`;

export const trackStyle = {
    backgroundColor: '#f2af2a',
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
    backgroundColor: 'transparent',
    borderColor: '#f2af2a',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: 10,
};
