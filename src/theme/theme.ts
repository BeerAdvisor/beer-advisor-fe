import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#ffc561',
        light: '#ffb400',
        lightContrast: '#FFFFFF',
        darkContrast: '#000',
    },
    secondary: {
        main: '#FFFFFF',
    },
};

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Muli',
        useNextVariants: true,
        h1: {
            color: palette.primary.lightContrast,
            fontFamily: 'Staatliches',
            fontSize: '9rem',
        },
        h3: {
            fontFamily: 'Staatliches',
            fontSize: '90px',
            color: '#000000',
        },
        h4: {
            fontFamily: 'Staatliches',
            fontSize: '43px',
            lineHeight: 1.97,
        },
        h6: {
            color: palette.primary.light,
            fontSize: '24px',
            letterSpacing: '0.6px',
        },
        subtitle1: {
            color: palette.primary.lightContrast,
            fontFamily: 'Staatliches',
            letterSpacing: '0.7px',
            fontSize: '27px',
            fontWeight: 400,
        },
        subtitle2: {
            color: palette.primary.darkContrast,
            lineHeight: '1.51',
            letterSpacing: '0.5px',
            fontSize: '21.5px',
            fontWeight: 400,
        },
        // @ts-ignore
        bigSearchValue: {
            color: palette.primary.lightContrast,
            fontFamily: 'Staatliches',
            letterSpacing: '0.9px',
            lineHeight: 1,
            fontSize: '36px',
        },
    },
    palette,
    overrides: {
        MuiFormLabel: {
            root: {
                color: '#000000',
                fontSize: '18px',
                alignSelf: 'center',
                left: 'unset',
            },
        },
        MuiInputBase: {
            root: {
                backgroundColor: 'transparent',
                marginTop: '16px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08);',
                borderRadius: '25px',
                // TODO: Media queries
                height: '40px',
                padding: '0px 14px',
            },
            input: {
                textAlign: 'center',
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
        },
    },
});

export default theme;
