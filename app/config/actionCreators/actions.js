export const loadFriends = function(friends){
		return {
			type: 'LOAD_FRIENDS',
			friends: friends
		}
	};

export const loginUser = function(username){
		return {
			type: 'LOGIN_USER',
			username: username
		}
	};

export const updateChat = function(chat){
		return {
			type: 'UPDATE_CHAT',
			chat: chat
		}
	};

export const sendMessage = function(message, sender){
		return {
			type: 'SEND_MESSAGE',
			text: message,
			sender: sender,
			date: Date.now()
		}
	};

