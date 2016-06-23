import React from 'react';


var Main = React.createClass({
	render: function(){
		return (
			<div className="main-container">
				<div>
					{this.props.children}
				</div>
			</div>
			);
	}
});

export default Main;