var React = require('react');
var LoginContainer = require('../containers/LoginContainer')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Home = React.createClass({
	

	render: function(){
		return(

			<div>
				<LoginContainer />
				<Link to="/signup">
					<p>Not A Member</p>
				</Link>
			</div>
		)
	}
})

module.exports = Home;