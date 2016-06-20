import {createStore, combineReducers} from 'redux';
import messages from '../reducers';
import friends from '../reducers';
import app from '../reducers';
import login from '../login'

const reducers = combineReducers({
	messages: messages,
	friends: friends,
	app: app,
	login: login
})

var store = createStore(reducers);

export default store;