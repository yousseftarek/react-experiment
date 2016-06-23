import {createStore, combineReducers, applyMiddleware}  from 'redux';
import {routerMiddleware} 								from 'react-router-redux';
import reducers from '../reducers/reducers'
import {hashHistory} from 'react-router';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'


const logger  = createLogger();

const middleware = routerMiddleware(hashHistory);


var initial = {
	friends: [{id:1,username:'abooya'}],
	login: {},
	messages: []
}
const store = createStore(reducers,initial, applyMiddleware(thunk, middleware, logger));
/*store.subscribe(() => {
	console.log("store update", store.getState())
});*/

export default store;