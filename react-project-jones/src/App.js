import React from 'react';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Portfolio from './components/Portfolio';
import Company from './components/Company';
import Contact from './components/Contact';
import './index.css'
import { Switch,Route,useLocation } from 'react-router-dom'

function App() {
 let location=useLocation()
  return (
    
    <Switch location={location} key={location.pathname} >
    <Route exact path = '/' component={Hero}></Route>
   <Route exact path='/about'><Aboutus/></Route>
    <Route exact path='/portfolio'><Portfolio/></Route>
    <Route exact path = '/companies' component={Company}></Route>
   <Route exact path = '/contact' component={Contact}></Route>
    </Switch>
  
    
  );
}

export default App;
