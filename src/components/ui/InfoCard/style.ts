import styled from '../../../styled-components';

export interface InfoCardStyledProps {
    isFirst?: boolean;
    isLast?: boolean;
    index?: number;
}

const getInfoCardBorderRadius = ({ isFirst, isLast, theme: { borderRadius } }: any) => {
    if (isFirst) {
        return `${borderRadius} ${borderRadius} 0 0`;
    }

    if (isLast) {
        return `0 0 ${borderRadius} ${borderRadius}`;
    }

    return '0';
};

export const InfoCardStyled = styled.div<InfoCardStyledProps>`
    display: flex;
    justify-content: space-between;
    height: 8.5rem;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.palette.light};
    z-index: ${props => typeof props.index === 'number' ? 1000 - props.index : 0};

    &:hover {
        z-index: 1001;
    }

    border-radius: ${getInfoCardBorderRadius};
`;

export const InfoCardContainer = styled.div`
    display: flex;
    cursor: pointer;
    position: absolute;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 3rem;
    box-sizing: border-box;
`;

export const InfoCardColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const InfoCardRow = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const InfoCardBigValue = styled.span`
    font-size: 1.3rem;
    font-family: Raleway;
    font-weight: 600;
    color: #000000;
`;

export const LabelValueContainer = styled.span`
    &:not(:first-child) {
        margin-left: 2rem;
    }
`;

export const BottomLinkContainer = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    left: 45%;
    bottom: 5%;
    cursor: pointer;
    margin-bottom: 1rem;
    align-self: flex-end;
    color: ${props => props.theme.palette.secondary.main};
`;

export const LeftDetailContainer = styled.div`
    width: 6rem;
    height: 6rem;
    margin-right: 3rem;
    border-radius: 50%;
    background-color: gray;
`;

const getRightDetailBorderRadius = ({ isFirst, isLast, theme: { borderRadius } }: any) => {
    if (isFirst) {
        return `0 ${borderRadius} 0 0`;
    }

    if (isLast) {
        return `0 0 ${borderRadius} 0`;
    }

    return '0';
};
export const RightDetail = styled.div<InfoCardStyledProps>`
    display: flex;
    align-items: center;
    height: 100%;
    align-self: flex-end;
    width: 3rem;
    background-color: ${props => props.theme.palette.primary.light};
    border-radius: ${getRightDetailBorderRadius};
    cursor: pointer;
`;

export const BottomLink = styled.span`
    font-size: 0.8rem;
    color: ${props => props.theme.palette.secondary.main}
    
    &: hover {
        text-decoration: underline;
    }
`;
