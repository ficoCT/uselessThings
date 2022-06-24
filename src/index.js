import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './scss/main.scss';
import './firebase.js';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileApp from "./MobileApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserView>
            <App />
        </BrowserView>
        <MobileView>
            <MobileApp />
        </MobileView>
    </>
);

