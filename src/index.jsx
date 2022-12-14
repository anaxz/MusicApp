import React from 'react';
import { createRoot } from 'react-dom/client';
// in react ver18 will throw err if not use this

import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);

