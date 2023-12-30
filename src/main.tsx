import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PresentationProvider from './context/presentation.tsx'
import {Provider} from "react-redux";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <PresentationProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </PresentationProvider>
    </React.StrictMode>
  )