import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from './AboutMe'
import ContactInfo from './stateless/ContactInfo'
import CV from './stateless/CV'
import Projects from './stateless/Projects'
import Network from './Network'
import NavBar from './navbar/NavBar'

const Router = () => {
    return (
        <div>
            <NavBar />
                <Switch>
                    <Route exact path='/' component={AboutMe} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/cv' component={CV} />
                    <Route path='/network' component={Network} />
                    <Route path='/contact' component={ContactInfo} />
                </Switch>
        </div>
    );
};

export default Router;