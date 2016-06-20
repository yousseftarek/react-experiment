const friends = function(state, action){
	switch (action.type){
		case 'LOAD_FRIENDS':
			return action.friends;
		default: 
			return [];
	}
}

export default friends;