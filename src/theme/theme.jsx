import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000',
            light: '#ffff'
        },
        background: {
            default: '#e4f0e2'
        }
    }
})
export default function CustomStyles({ children }) {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}
