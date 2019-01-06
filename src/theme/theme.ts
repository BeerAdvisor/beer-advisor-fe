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
        MuiInputLabel: {
            shrink: {
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
                    'label + &': {
                        marginTop: 30,
                      },
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
                marginTop: '31px',
                height: '40px',
            },
        },
    },
});

export default theme;