import React from 'react';
import TextField from '@material-ui/core/TextField';

interface SearchFieldProps {
    classes?: any;
}

const SearchField = (props: SearchFieldProps) => {
    return <TextField id="search-bar" label="Beer" variant="standard" />;
};

export default SearchField;
