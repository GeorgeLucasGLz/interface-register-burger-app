import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Orders from './pages/Orders'


function Routes() {

    return (

        <Router>

            <Route exact path="/" component={Home} />
            <Route exact path="/pedidos" component={Orders} />

        </Router>

    )
}

export default Routes