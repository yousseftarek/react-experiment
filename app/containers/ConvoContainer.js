var React = require('react');

var Convo = require('../components/Convo');

var ConvoContainer = React.createClass({

	handleImage: function(user){
		//get image from DB
	}
	render: function(){
		var img = handleImage(this.props.username);
		return (
			<Convo username={this.props.username} imgURL={img} />
		)
	}
});

module.exports = ConvoContainer;