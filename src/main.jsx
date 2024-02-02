import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DashboardLayout from './DashboardLayout.jsx'
import {ConfigProvider} from 'antd'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider direction='rtl' >
    <DashboardLayout> 
    <App />
    </DashboardLayout>
    
    </ConfigProvider>
    </BrowserRouter>
 </React.StrictMode>,
)
