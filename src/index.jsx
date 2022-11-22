import React from 'react';
import { createRoot } from 'react-dom/client';
// in react ver18 will throw err if not use this

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App/>);
