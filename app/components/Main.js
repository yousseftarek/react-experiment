var React = require('react');


var Main = React.createClass({
	render: function(){
		return (
			<div className="main-container jumbotron col-sm-6 col-sm-offset-3 text-center">
			<h1>Welcome to Messenger</h1>
			<div>
			{this.props.children}
			</div>
			</div>
			);
	}
});

module.exports = Main;