import React from "react";
import { render } from "react-dom";
import App from "app/app";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.createElement('div')
rootEl.id = 'nurlan'

render(
    <React.StrictMode>
      <BrowserRouter>
    <App />
      
      </BrowserRouter>
  </React.StrictMode>,
  rootEl
)

document.body.appendChild(rootEl)

