import styled from '../../../../styled-components';

interface TableSortLabelProps {
    isActive?: boolean;
    onClick?: () => void;
}
const TableSortLabel = styled.span<TableSortLabelProps>`
    display: flex;
    justify-content: space-between;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 0.78rem;
    line-height: 0.95rem;
    text-transform: capitalize;
    
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.palette.primary.light};
    }

    ${props =>
        props.isActive &&
        `
        color: ${props.theme.palette.primary.light};
    `}
`;

export default TableSortLabel;
