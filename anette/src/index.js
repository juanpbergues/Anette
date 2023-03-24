import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F2E0E5',
    },
    secondary: {
      main: '#708DC7',
    },
  },
  typography: {
    fontFamily: [
      'Bozon',
      'Chequersdemo',
      'MyriadPro',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </React.StrictMode>,
);
