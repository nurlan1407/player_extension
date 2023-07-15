import React from "react";
import { render } from "react-dom";
import App from "app/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore, store } from "store/appStore";

const rootEl = document.createElement('div')
rootEl.id = 'nurlan'

render(
    <Provider store={store}>
        
      <BrowserRouter>
    <App />
      </BrowserRouter>
  
    </Provider>
    ,
  rootEl
)

document.body.appendChild(rootEl)

