import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "jotai";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = createRoot(document.getElementById("app"));

root.render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
);