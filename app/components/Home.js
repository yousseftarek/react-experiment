var React = require('react');
var Login = require('../containers/Login')

var Home = React.createClass({
	

	render: function(){
		return(

			<div>
				<h1>Welcome To Messanger</h1>
				<Login />
			</div>
		)
	}
})

module.exports = Home;