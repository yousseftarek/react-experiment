const app = function(state, action){
	switch(action.type){
		case 'LOAD_CHAT' :
			return {id: action.id};
		default :
			return {id: -1};
	}
}

export default app;