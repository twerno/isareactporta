import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Tylko na potrzeby logowania
const firebaseConfig = {
    apiKey: "AIzaSyBJR7fEfWgZSUM7m-BTeud5iNlibRwuvow",
    authDomain: "rest-api-b6410.firebaseapp.com",
    databaseURL: "https://rest-api-b6410.firebaseio.com",
    projectId: "rest-api-b6410",
    storageBucket: "rest-api-b6410.appspot.com",
    messagingSenderId: "278242273749",
    appId: "1:278242273749:web:f47f0beae70d68a555b55c"
};

initializeApp(firebaseConfig);
// ---------------------------

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
