import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./home/page"

const theme = createTheme({
  typography: {
    a: {
       fontFamily: "Encode Sans",
       fontSize: 12
    },
    b: {
       fontFamily: "Roboto",
       fontSize: 14
    } 
},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
