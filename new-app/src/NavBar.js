import React, { Component } from 'react';
import Account from "./Account";
import Done from "./Done";
import Like from "./Like";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
export default class NavBar extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to = "">Main</Link>
                        </li>
                        <li>
                            <Link to = "/account">Account</Link>
                        </li>
                        <li>
                            <Link to = "/done">Done</Link>
                        </li>
                        <li>
                            <Link to = "/like">Like</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path = "/Main">
                        
                    </Route>
                    <Route path = "/Account">
                        <Account></Account>
                    </Route>
                    <Route path = "/Done">
                        <Done></Done>
                    </Route>
                    <Route path = "/Like">
                        <Like></Like>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
