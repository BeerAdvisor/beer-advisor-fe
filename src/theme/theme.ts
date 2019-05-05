import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles';
import { PaletteOptions as MuiPalette, PaletteColorOptions as MuiColor } from '@material-ui/core/styles/createPalette';

export type Color = {
    light: string;
} & MuiColor;

export type Palette = {
    primary: Color;
    dividerColor: string;
    backgroundLight: string;
    dark: string;
    light: string;
} & MuiPalette;

const palette: Palette= {
    primary: {
        main: '#FECC30',
        light: '#FEC619',
    },
    secondary: {
        main: '#009B88',
        dark: '#006666',
    },
    dividerColor: '#DEDBDB',
    backgroundLight: '#F3F2F0',
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
            fontSize: '1.3rem',
            lineHeight: '28px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
        h6: {
            color: palette.primary.light,
            fontSize: '1rem',
        },
        subtitle1: {
            color: palette.dark,
            fontFamily: 'Raleway',
            fontSize: '1.3rem',
            fontWeight: 600,
        },
        subtitle2: {
            color: palette.dark,
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.5,
        },
        body1: {
            color: palette.dark,
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
    },
    palette,
    overrides: {
        MuiFormLabel: {
            root: {
                fontFamily: 'Montserrat',
                color: '#000000',
                fontSize: '1rem',
                left: '.8rem',
                position: 'relative',
            },
        },
        MuiInputBase: {
            root: {
                backgroundColor: 'transparent',
                marginTop: '.5rem',
                boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '40px',
                minHeight: '40px',
                padding: '0px 14px',
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
                marginTop: '1.5rem',
                
            },
        },
        MuiSvgIcon: {
            root: {
                width: '1.5em',
            },
        },
        MuiTab: {
            label: {
                fontFamily: 'Raleway',
                fontSize: '24px',
            },
        },
    },
});

export interface Surfaces {
    shadow_1: string;
    color_shadow_1: string;
    color_shadow_2: string;
}

export type Theme = {
    palette: Palette;
    borderRadius: string;
    topDownPadding: string;
    sidesPadding: string;
    combinedPadding: string;
    surfaces: Surfaces;
} & MuiTheme;

const topDownPadding = '1.6rem';
const sidesPadding = '7rem';

const theme = {
    ...muiTheme,
    borderRadius: '30px',
    topDownPadding,
    sidesPadding,
    combinedPadding: `${topDownPadding} ${sidesPadding}`,
    surfaces: {
        shadow_1: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        color_shadow_1: '0px 3px 10px rgba(0, 153, 153, 0.2)',
        color_shadow_2: '0px 4px 16px rgba(0, 153, 153, 0.5)',
    },
};

export default theme;
