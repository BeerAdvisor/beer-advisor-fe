import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f2af2a',
        },
        secondary: {
            main: '#feffb3',
        },
    },
    overrides: {
        MuiFormLabel: {
            root: {
                color: '#000000',
                fontSize: '24px',
                alignSelf: 'center',
                left: 'unset',
            },
        },
        MuiInputBase: {
            root: {
                    backgroundColor: '#e8e8e8',
                    borderRadius: '25px',
                    // TODO: Media queries
                    height: '40px',
                    padding: '0px 14px',
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
                marginTop: '60px',
            },
        },
    },
});

export default theme;