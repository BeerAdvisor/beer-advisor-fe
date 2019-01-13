import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffc561',
        },
        secondary: {
            main: '#fff',
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
                marginTop: '24px',
            },
        },
    },
});

export default theme;