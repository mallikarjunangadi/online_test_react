import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import './index.css';
import Main from './main/navbarpage'
import Login from './main/login'


/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

ReactDOM.render(
   <Router history={browserHistory}> 
     <Route component={Main}>   
       <Route path = '/' component = {Login} />
       <Route path = '/login' component = {Login} />  
       <Route path = '/quiz' component = {App} /> 
     </Route>
   </Router>
, document.getElementById('root')); 