import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./Router";
import { Provider as AuthProvider } from "./context/auth";
const theme = createTheme({
    typography: {
        fontFamily: "'Roboto', sans-serif",

        h1: {
            fontFamily: "'Roboto', sans-serif",
            fontSize: "3.8em",
            fontWeight: 900,
            color: "#2E274C",
            lineHeight: "1em",
            textUnderlineOffset: ".2em",
        },
        h2: {
            fontSize: "1.4em",
            fontWeight: 500,
            margin: "1.5em 0",
        },
        h3: {
            fontSize: "1.3em",
            fontWeight: 600,
            color: "white",
            margin: ".5em 0",
            fontStyle: "normal",
        },
        p: {
            fontSize: "1em",
            margin: ".5em 0",
            fontWeight: 600,
        },
        caption: {
            fontSize: "1.3em",
            fontWeight: 500,
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(255,255,255,1)",
                },
                "::-webkit-scrollbar": {
                    width: "1.4em",
                    backgroundColor: "#2E274C",
                },
            },
        },
        MuiFormLabel: {
            root: {
                borderColor: "#04294F",
            },
        },
    },
    palette: {
        text: {
            primary: "#2E274C",
            secondary: "#2E274C",
        },
        background: {
            default: "#2E274C",
            paper: "#fdfdfd",
        },
        primary: {
            main: "#2E274C",
        },
        secondary: {
            main: "#fff",
        },

        //type : darkMode ? 'dark' : 'light' ,
    },
});
function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
