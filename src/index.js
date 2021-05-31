import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#88b0b8',
    },
    secondary: {
      main: '#bcd65a',
    },
    background: {
      default: '#8caba8',
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: 'GothRegular, GothBold, GothExtraBold',
  },
  overrides: {
    MuiInputBase: {
      input: {
        backgroundColor: '#ebdada',
      },
    },
  },

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
