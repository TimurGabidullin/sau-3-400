import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import { SnackbarProvider } from 'notistack';
import Box from '@mui/material/Box';
import {Zoom} from "@mui/material";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>


            <SnackbarProvider maxSnack={4}
                              autoHideDuration={1000}
                              anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              TransitionComponent={Zoom}
            >

            <App/>


            </SnackbarProvider>


        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
