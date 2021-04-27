import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import App from "./App";
import "./scss/main.scss";

// pass in inital state from server data or local storage etc.
const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </ReduxProvider>,
document.getElementById("root"));
