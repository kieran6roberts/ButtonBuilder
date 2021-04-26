import configureStore from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import BuildPage from "./components/BuildPage/BuildPage";
import HomePage from "./components/HomePage/HomePage";
import MyButtonsPage from "./components/MyButtonsPage/MyButtonsPage";
import "./scss/main.scss";

// pass in inital state from server data or local storage etc.
const store = configureStore();

class App extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/build" component={BuildPage} />
                <Route path="/my-buttons" component={MyButtonsPage} />
                <Route component={HomePage} />
            </Switch>
        )
    }
}

export default App;

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </ReduxProvider>,
document.getElementById("root"));
