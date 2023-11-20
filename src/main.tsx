import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { AuthProvider } from './auth/authProvider.tsx'
import { Provider } from 'react-redux';
import ReduxStore from './redux/store.ts';

//console.log(import.meta.env.VITE_APP_NAME);
//string mode renderiza 2 veces
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={ReduxStore}>
        <App></App>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)
