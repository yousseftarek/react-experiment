const login = function(state, action){
	switch(action.type){
		case 'LOGIN_USER' :
			return {username: action.username};
		default return {};
	}
}

export default login;