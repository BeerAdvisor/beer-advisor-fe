import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import { PaletteOptions as MuiPalette, PaletteColorOptions as MuiColor } from '@material-ui/core/styles/createPalette';

export type Color = {
    light: string;
} & MuiColor;

export type Palette = {
    primary: Color;
    backgroundLight: string;
    dark: string;
    light: string;
} & MuiPalette;

const palette: Palette= {
    primary: {
        main: '#ffc561',
        light: '#ffb400',
    },
    secondary: {
        main: '#FFFFFF',
    },
    backgroundLight: '#EDEBE3',
    light: '#FFFFFF',
    dark: '#000',
};

const muiTheme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat',
        useNextVariants: true,
        h1: {
            color: palette.light,
            fontFamily: 'Raleway',
            fontSize: '9rem',
        },
        h3: {
            fontFamily: 'Raleway',
            fontSize: '90px',
            color: '#000000',
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '43px',
            lineHeight: 1.97,
        },
        h6: {
            color: palette.light,
            fontSize: '24px',
            letterSpacing: '0.6px',
        },
        subtitle1: {
            color: palette.dark,
            fontFamily: 'Raleway',
            fontSize: '24px',
            fontWeight: 600,
        },
        subtitle2: {
            color: palette.light,
            lineHeight: '1.51',
            letterSpacing: '0.5px',
            fontSize: '21.5px',
            fontWeight: 400,
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

export type Theme = {
    palette: Palette;
    borderRadius: string;
    topDownPadding: string;
    sidesPadding: string;
    combinedPadding: string;
} & MuiTheme;

const topDownPadding = '30px';
const sidesPadding = '7rem';

const theme = {
    ...muiTheme,
    borderRadius: '30px',
    topDownPadding,
    sidesPadding,
    combinedPadding: `${topDownPadding} ${sidesPadding}`,
};

export default theme;
