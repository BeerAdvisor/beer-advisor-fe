import styled from 'styled-components';

export const Labels = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const SliderContainer = styled.div`
    width: 99%;
    margin-top: 25px;
`;

export const trackStyle = {
    backgroundColor: 'yellow',
    height: 10,
};

export const handlerStyle = {
    backgroundColor: 'yellow',
    borderColor: 'yellow',
    height: 17,
    width: 17,
    marginLeft: -6,
    marginTop: -3,
};

export const railStyle = {
    backgroundColor: 'transparent',
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: '1px',
    height: 10,
};
