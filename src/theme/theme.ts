import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#ffc561',
        light: '#ffb400',
    },
    secondary: {
        main: '#fff',
    },
};

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Muli',
        useNextVariants: true,
        h6: {
            color: palette.primary.light,
            fontSize: '24px',
            letterSpacing: '0.6px',
        },
    },
    palette,
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
                backgroundColor: 'transparent',
                boxShadow: '3px 0 10px 0 rgba(0, 0, 0, 0.11)',
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
        MuiSvgIcon: {
            root: {
                width: '1.5em',
            },
        },
        MuiTab: {
            label: {
                fontFamily: 'Staatliches',
                fontSize: '48px',
            },
        }
    },
});

export default theme;
