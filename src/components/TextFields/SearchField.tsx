import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const SearchField = (props: TextFieldProps) => {
    return <TextField id="search-bar" {...props} />;
};

export default SearchField;
