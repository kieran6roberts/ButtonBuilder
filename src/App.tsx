import React from "react";
import { Switch, Route } from "react-router-dom";
import BuildPage from "./components/BuildPage/BuildPage";
import HomePage from "./components/HomePage/HomePage";
import MyButtonsPage from "./components/MyButtonsPage/MyButtonsPage";

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