import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Discover from './components/pages/Discover';
import Search from './components/pages/Search';
import Nav from './components/Nav';

export default function App() {
  return <Router>   
  <Nav />
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/discover' component={Discover} />
      <Route exact path='/search' component={Search} />
    </Switch>  
</Router>;}

 

