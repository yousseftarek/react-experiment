import React 		from 'react';
import {Router} 		from 'react-router';
import Friend 		from './Friend';

var Friends = React.createClass({
	updateChat: function(friend){
			var username = this.props.username;
			var chat = [];
			//go to DB and return the array of exchanged messages between the two
			console.log('be5')
			this.props.loadChat(chat); 
		},
		render: function(){
			var friends = this.props.friends;
			var myFriends = [];
			var c = 0;
			console.log(this, "ahe");
			var that = this;
			this.props.friends.map(function(friend){
				myFriends.push(
					<Friend key={friend.username} friendName={friend.username} update={that.updateChat}></Friend>
				)
				c++;
			});
			return (
				<div>
					<div>
						<h2>{this.props.username}</h2>
					</div>

					<div>
						<h3>Friends:</h3>
						
						<ul>
							{myFriends}
						</ul>
					</div>
				</div>
			)
		}
})

export default Friends;