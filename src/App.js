import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/headerComponent';
import Content from './components/contentComponent';
import Details from './components/detailsComponent';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
      <Route component={ScrollToTop} />
       <Switch>
       <Route path='/:country' component={Details}/>
       <Route path='/' component={Content}/>
       </Switch>
      </div>
    </div>
  );

}
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
