import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { AuthProvider } from './auth/authProvider.tsx'


//console.log(import.meta.env.VITE_APP_NAME);
//string mode renderiza 2 veces
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </React.StrictMode>,
)
