import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from './AboutMe'
import ContactInfo from './ContactInfo'
import Technologies from './Technologies'
import Projects from './Projects'
import MessageBoard from './MessageBoard'
import NavBar from './NavBar'

const Router = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route path='/projects' component={Projects} />
                <Route path='/technologies' component={Technologies} />
                <Route path='/contact' component={ContactInfo} />
                <Route path='/messageboard' component={MessageBoard} />
            </Switch>
        </div>
    );
};

export default Router;