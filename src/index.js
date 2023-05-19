import React from "react";
import "./css/style.css";
import { App } from "./router/App";
import { createRoot } from 'react-dom/client';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Translation
import './i18n';

// ReactDOM.render(<App />, document.getElementById("root"));

// After
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <main>
          <App />
      </main>
    </BrowserRouter>
  </React.StrictMode>
  );