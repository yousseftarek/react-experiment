import React from 'react';
import ReactDOM from 'react-dom';
import store 				from './config/store/store';

import routes from './config/routes';

store.subscribe(()=> {

ReactDOM.render(
	routes
	,
	document.getElementById('app')
	);
})

ReactDOM.render(
	routes
	,
	document.getElementById('app')
	);