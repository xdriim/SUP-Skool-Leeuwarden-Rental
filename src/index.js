import React from "react";
import "./css/style.css";
import { App } from "./components/App";
import { createRoot } from 'react-dom/client';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GenerateHeader from "./components/sections/Header";
import GenerateFooter from "./components/sections/Footer";

import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById("root"));

// After
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<div>
  <Router>
    <GenerateHeader />
    <main>
        <App />
    </main>
    <GenerateFooter />
    </Router>
  </div>);