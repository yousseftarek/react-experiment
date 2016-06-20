var React 		= require('react');
var PropTypes 	= React.PropTypes;
var connect 	= require('react-redux').connect;
var Friends 	= require('../components/Friends');

const mapDispatchToProps = function(dispatch, ownProps){
	return {
		loadChat: function(id){
			dispatch({
				type: 'LOAD_CHAT',
				id: id
			})
		}
	}
}

var FriendsContainer = connect(mapDispatchToProps)(Friends);

module.exports = FriendsContainer;