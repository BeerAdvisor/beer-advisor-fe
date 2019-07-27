import React, { ReactNode } from 'react';
import { map } from 'ramda';
import { TableHead, TableBody } from '@material-ui/core';

import { ExpandedCardTableHead } from '../ExpandedCardTableHead';
import ExpandedCardTableRow from '../ExpandedCardTableCell/ExpandedCardTableRow';
import { Cell } from '../ExpandedCardTableHead/ExpandedCardTableHead';

import { SerachResultTableWrapper } from './style';

export interface SearchResultTableProps {
    handleValueSearch: (searchValue: string) => void;
    tableHeading: Cell[];
    tableBody: TableBody[];
}

export interface TableBody {
    name: string;
    link: ReactNode;
    id: string | number;
    values: TableBodyValues[];
}

export interface TableBodyValues {
    [key: string]: string;
}

const SearchResultTable = ({
    handleValueSearch,
    tableHeading,
    tableBody,
    ...other
}: SearchResultTableProps) => (
    <SerachResultTableWrapper {...other}>
        <TableHead>
            <ExpandedCardTableHead
                onValueSearch={handleValueSearch}
                cells={tableHeading}
            />
        </TableHead>
        <TableBody>
            {map(
                ({ name, values, id, link }) => (
                    <ExpandedCardTableRow
                        key={id}
                        link={link}
                        name={name}
                        id={id}
                        values={values}
                    />
                ),
                tableBody
            )}
        </TableBody>
    </SerachResultTableWrapper>
);

export default SearchResultTable;
