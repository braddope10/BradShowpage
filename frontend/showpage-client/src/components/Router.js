import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from './AboutMe'
import ContactInfo from './stateless/ContactInfo'
import CV from './stateless/CV'
import Projects from './stateless/Projects'
import MessageBoard from './MessageBoard'
import NavBar from './navbar/NavBar'

const Router = () => {
    return (
        <div>
            <NavBar />
                <Switch>
                    <Route exact path='/' component={AboutMe} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/cv' component={CV} />
                    <Route path='/contact' component={ContactInfo} />
                    <Route path='/messageboard' component={MessageBoard} />
                </Switch>
        </div>
    );
};

export default Router;