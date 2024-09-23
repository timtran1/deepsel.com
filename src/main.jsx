import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {MantineProvider} from '@mantine/core';

import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MantineProvider>
            <App/>
        </MantineProvider>
    </React.StrictMode>,
)
