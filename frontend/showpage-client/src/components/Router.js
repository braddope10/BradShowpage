import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutMe from './AboutMe'
import UsersContainer from './UsersContainer'
import ContactInfo from './ContactInfo'
import Technologies from './Technologies'
import Projects from './Projects'
import MessageBoard from './MessageBoard'




const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={AboutMe} />
            <Route path='/projects' component={Projects} />
            <Route path='/technologies' component={Technologies} />
            <Route path='/contactinfo' component={ContactInfo} />
            <Route path='/messageboard' component={MessageBoard} />
            <Route path='/messages' component={UsersContainer} />
        </Switch>
    );
};

export default Router;