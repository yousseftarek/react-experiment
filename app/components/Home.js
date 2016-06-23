import React 			from 'react';
import LoginContainer 	from '../containers/LoginContainer';
import {Router} 		from 'react-router';

var Home = React.createClass({
	render: function(){
		return(

			<div className=" jumbotron col-sm-6 col-sm-offset-3">
				<LoginContainer />
			</div>
		)
	}
})

export default Home;