
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


import Main 		from '../components/Main';
import Home 		from '../components/Home';
import Login 		from '../containers/LoginContainer';
import Signup 		from '../containers/SignUpContainer';
import AppContainer	from '../containers/AppContainer';

import store 		from './store/store';
import {Provider} 	from 'react-redux';



var routes = (

	<Provider store = {store}>
		<Router history={hashHistory}>
			<Route path='/' component={Main} >
				<IndexRoute component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/app' component={AppContainer} />
			</Route>
		</Router>
	</Provider>
	)

export default routes;