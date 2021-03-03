import React from 'react'
import NavBar from './NavBar'
import Router from './Router'


const App = () => {
    return (
        <div>
            
            <Router>
                <NavBar />
            </Router>
        </div>
    );
};

export default App;