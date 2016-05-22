import React from 'react';
import ReactDOM from 'react-dom';
import {ReactRouter, Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './App';
import Menu from './modules/Menu';
import Home from './modules/Home';
import About from './modules/About';
import Cakes from './modules/Cakes';
import Cupcakes from './modules/Cupcakes';


ReactDOM.render(<Router history={hashHistory}>
					<Route path= '/' component={App}/>
					<Route path='/menu' component={Menu}/>
					<Route path='/home' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/galleries/cakes' component={Cakes}/>
					<Route path='/galleries/cupcakes' component={Cupcakes}/>
				</Router>,
					 document.querySelector('#app'));
