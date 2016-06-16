var React = require('react');
var LoginContainer = require('../containers/LoginContainer');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;
var Home = React.createClass({
	render: function(){
		return(

			<div className=" jumbotron col-sm-6 col-sm-offset-3">
				<LoginContainer />
			</div>
		)
	}
})

module.exports = Home;