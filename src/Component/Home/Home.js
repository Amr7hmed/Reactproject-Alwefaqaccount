import React from 'react'
import Detiles from './Detiles'
import Navbar from './Navbar';
import './Home.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Notification from '../Notification/Notification';

function Home() {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" component={Detiles} exact />
                <Route path="/notification" component={Notification} exact />
            </Switch>
        </Router>
        </>
    )
}

export default Home;