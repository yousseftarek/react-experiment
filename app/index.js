var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
import { Provider } from 'react-redux';
import store from './config/store';
//var Provider = require('react-redux').Provider;



ReactDOM.render(
	<Provider store={store}>
	{routes}
	</Provider>
	,
	document.getElementById('app')
	);