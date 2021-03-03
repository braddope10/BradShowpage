import React from 'react'
import NavBar from './NavBar'
// import Router from './Router'

import AboutMe from './AboutMe'
import ContactInfo from './ContactInfo'
import Technologies from './Technologies'
import Projects from './Projects'
import MessageBoard from './MessageBoard'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'



const App = () => {
    return(
        <Router>
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
        </Router>
    )
}

export default App












// const App = () => {
//     return (
       
            
//             <Router>
//                 <div>
//                     <NavBar />
//                 </div>
//             </Router>
       
//     );
// };

// export default App;