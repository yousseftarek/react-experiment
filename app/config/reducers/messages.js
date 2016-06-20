const message = function(state = [], action){
	switch(action.type){
		case 'SEND_MESSAGE' : 
			return [...state, {text: action.text, sender: action.sender, date: action.date}];

		case 'UPDATE_CHAT': 
			return action.chat;

		default : return state;
	}
}

export default message;