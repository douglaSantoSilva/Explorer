import { ThemeProvider }  from 'styled-components'
import GlobalStyles from './styles/global'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/authContext'
import theme from './styles/theme'
import { Routes } from './routes'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>  
    </ThemeProvider>
  </React.StrictMode>
)
