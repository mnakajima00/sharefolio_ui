import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#00214d'
        },
        secondary: {
            main: '#00ebc7'
        },
        text: {
            primary: '#1b2d45'
        },
        background: {
            paper: '#f2f4f6',
            default: '#fffffe'
        }
    },
    typography: {
        fontFamily: `"Inter", "Helvetica"`,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.1)',
                    padding: '0.2em',
                    // borderBottomLeftRadius: '2em',
                    // borderBottomRightRadius: '2em'
                }
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;