var React = require('react');
var ConvoContainer = require('../container/ConvoContainer');

var Chats = React.createClass({
	render: function(){
		return (
			var convos=[];
			this.props.chats.forEach((convo)=>{
				convos.push(<ConvoContainer username={convo.recipient} />)
			}.bind(this));
			<div className="chats">
				<h3>Active Chats </h3>
				<div>
					{convos}
				</div>
			</div>

		)
	}
});

module.exports= Convos;