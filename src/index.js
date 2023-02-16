import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import { GenerateHeader } from "./components/generate_header";
import { GenerateFooter } from "./components/generate_footer";

ReactDOM.render(<GenerateHeader />, document.getElementsByTagName('header')[0])
ReactDOM.render(<GenerateFooter />, document.getElementsByTagName('footer')[0])