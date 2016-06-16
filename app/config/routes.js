var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var Login = require('../containers/LoginContainer');
var Signup = require('../containers/SignUpContainer');
var App = require('../components/App');


var routes = (

	<Router history={hashHistory}>
		<Route path='/' component={Main} >
			<IndexRoute component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Route path='/app' component={App} />
		</Route>
	</Router>
	)

module.exports = routes;