//Dependencies
import React from 'react';
import {Route,Switch} from 'react-router-dom';

//Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes=()=>
<App>
  <switch>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/" component={Home}/>
    <Route  component={Page404}/>
  </switch>
</App>;

export default AppRoutes;
