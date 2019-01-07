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
    backgroundColor: '#f2af2a',
    borderColor: '#f2af2a',
    height: 17,
    width: 17,
    marginLeft: -6,
    marginTop: -3,
};

export const railStyle = {
    backgroundColor: 'transparent',
    borderColor: '#f2af2a',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: 10,
};
