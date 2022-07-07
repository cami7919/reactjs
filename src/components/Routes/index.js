import React from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
 import Accueil from '../../pages/Accueil';
import Trending from '../../pages/Trending';
import Profile from '../../pages/Profile';

const index = () => {
    return (
        
    <Switch>
        <Router>           
            <Route  path="/" exact component={Accueil}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/trending" exact component={Trending}/>
            <Redirect to="/" />

        </Router>
    </Switch>
        
    );
};

export default index;