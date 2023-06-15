import React from 'react'
import ReactDOM from 'react-dom/client'
import { AllRoutes } from './routes/AllRoutes';
import { GlobalStyle } from './common/style/global';
import {ProductsProvider} from "./hooks/useProducts"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ProductsProvider>
      <AllRoutes />
    </ProductsProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
