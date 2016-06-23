import React 	from 'react';
import {Router} 	from 'react-router';


var Friend = React.createClass({
	render: function(){
		return (
			<li onClick= {()=>this.props.update(this.props.friendName)}>
				<span>{this.props.friendName}</span>
			</li>
		)
	}
})


export default Friend;