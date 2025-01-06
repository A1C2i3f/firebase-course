import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth } from "components/auth"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Auth />
  </React.StrictMode>
);
