import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Home,About,Contact} from './App.jsx';
//import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render((
   
       <Route path = "/" component = {App}>
          
          <Route path = "home" component = {Home} />
          <Route path = "about" component = {About} />
          <Route path = "contact" component = {Contact} />
       </Route>
    
 ), document.getElementById('app'))

//setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
