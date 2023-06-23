import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from '@mui/material/styles';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import 'normalize.css';

const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#5BE12C',
        },
        secondary: {
            main: '#cfcfcf',
        },
        background: {
            default: '#f0f0f0',
        },
    },
    typography: {
        h1: {
            fontSize: '18px',
            fontWeight: 500,
            color: '#ffffff',
            fontFamily: 'Poppins',
        },
        h2: {
            fontSize: '16px',
            color: '#ffffff',
            fontFamily: 'Poppins',
        },
        h3: {
            fontSize: '13.5px',
            color: '#ffffff',
            fontFamily: 'Poppins',
        },
        caption: {
            color: '#8A8A8A',
            fontFamily: 'Poppins',
            fontSize:'14px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    borderRadius: 8,
                    textTransform: 'none',
                    fontFamily: 'Poppins',
                },
                outlined: {
                    borderRadius: 8,
                },
                containedSecondary: {
                    '&.Mui-focusVisible': {
                        boxShadow: 'none',
                        color: '#fff',
                        background: '#000000',
                    },
                },
                containedPrimary:{
                    background:'#63B83F',
                    color: '#fff',
                    boxShadow: 'none',
                    ':hover':{
                        background:'#63B83F',
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    background: '#3B3B3B',
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(0.75),
                }),
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    height: 40,
                    minWidth: 200,
                    width:200,
                    borderRadius: 8,
                    background: '#3B3B3B',
                    fontSize: 12,
                    color: '#fff',
                    '&.Mui-focused': {
                        boxShadow: 'none',
                        color: '#fff',
                    },
                },
            },
        },
        MuiSwitch:{
            styleOverrides:{
                root:{
                    color:'#63B83F',
                },
            },
        },
    },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={muiTheme}>
                <App/>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
);
