import {createStore, combineReducers, applyMiddleware}  from 'redux';

const friends = function(state = {}, action){
	switch (action.type){
		case 'LOAD_FRIENDS':
			//console.log(action.friends, "in Frdqkwdnkwq;jef")
			return action.friends;
		default: 
			return state;
	}
}

const messages = function(state = [{text:'',sender:'',date:''}], action){
	switch(action.type){
		case 'SEND_MESSAGE' : 
			return [...state, {text: action.text, sender: action.sender, date: action.date}];

		case 'UPDATE_CHAT': 
			return action.chat;

		default : return state;
	}
}


const login = function(state = {}, action){
	switch(action.type){
		case 'LOGIN_USER' :
			return {username: action.username};
		default : return state;
	}
}


const reducers = combineReducers({
	 friends,
	 login,
	 messages
})


export default reducers;