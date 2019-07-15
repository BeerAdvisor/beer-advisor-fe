import styled from '../../../styled-components';
import { SMALL_BP_UP, SMALL_BP_DOWN } from '../../../theme';

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
    box-shadow: 0px -2px 20px rgba(0, 102, 102, 0.15);
    min-height: 8.5rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.palette.light};

    border-radius: ${props => props.theme.borderRadius};
    width: 100%;

    ${SMALL_BP_DOWN} {
        flex-direction: column;
        &:not(:first-child) {
            margin-top: 1rem;
        }
    }

    ${SMALL_BP_UP} {
        z-index: ${props => typeof props.index === 'number' ? 1000 - props.index : 0};
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        &:hover {
            z-index: 1001;
        }
        height: 8.5rem;
        width: 100%;
        border-radius: ${getInfoCardBorderRadius};
    }
`;

export const InfoCardContainer = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;

    ${SMALL_BP_UP} {
        position: absolute;
        margin: 1rem 3rem;
    }
    ${SMALL_BP_DOWN} {
        padding: 1rem 2rem;
        flex-direction: column;
    }
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

export const MainInfoWrapper = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
`;

export const BottomLinkContainer = styled.span`
    display: flex;
    align-items: center;
    align-self: center;
    color: ${props => props.color === 'primary' ? props.theme.palette.primary.main : props.theme.palette.secondary.main};

    ${SMALL_BP_UP} {
        left: 45%;
        bottom: 5%;
        position: relative;
        align-self: flex-end;
        cursor: pointer;
        margin-bottom: 1rem;
    }
`;

export const LeftDetailContainer = styled.div`
    width: 9rem;
    height: 9rem;
    margin-right: 1.5rem;
    border-radius: 50%;
    background-color: gray;
    ${SMALL_BP_UP} {
        width: 6rem;
        height: 6rem;
        margin-right: 3rem;
    }
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
    background-color: ${props => props.color === 'primary' 
    ? props.theme.palette.secondary.light
    : props.theme.palette.primary.light};
    border-radius: ${getRightDetailBorderRadius};
    cursor: pointer;
`;

export const MobileInfoCardTop = styled.div`
    display: flex;
`;

export const BottomLink = styled.span`
    font-size: 0.8rem;
    
    &:hover {
        text-decoration: underline;
    }
`;
