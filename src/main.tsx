import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import {Provider} from "react-redux";
import App from './App.tsx'
import {store} from "./store/store";
import './index.scss'

const root = ReactDOMClient.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
