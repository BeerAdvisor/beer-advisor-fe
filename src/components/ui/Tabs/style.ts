import styled from 'styled-components';

export interface TabsContainerProps { 
    variant?: 'small';
}
export const TabsContainer = styled.div<TabsContainerProps>`
    width: ${props => props.variant === 'small' ? '20%' : '100%'};
    display: flex;
    justify-content: flex-start;
`;
