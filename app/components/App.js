import React 				from 'react';
import ChatContainer 		from '../containers/ChatContainer';
import FriendsContainer 	from '../containers/FriendsContainer';
import {PropTypes} from 'react'
const App = React.createClass({
	
	contextTypes: {
		store: React.PropTypes.object
	},
	
	
	
					// 
	render: function(){
		var friends = this.props.friends
		return (
			<div>
				<div className="col-md-4">
					<FriendsContainer username={this.props.username} friends={this.props.friends}/>
				</div>
				<div className="col-md-8">
					<ChatContainer chat={this.props.chat} username= {this.props.username}/>
				</div> 

			</div>
		)
	}
})
App.propTypes = {
	friends: React.PropTypes.array.isRequired
}




/*will call convos and actual chat component*/
export default App;