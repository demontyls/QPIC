import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import {LangProvider} from "./shared/providers/lang";
import {ProductProvider} from "./shared/providers/products";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <LangProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </LangProvider>
      </BrowserRouter>
    </React.StrictMode>
);
