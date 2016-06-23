import React 		from 'react' ;
import {connect} 	from 'react-redux';
import Friends 		from '../components/Friends';
import {updateChat} from '../config/actionCreators/actions';



const mapStateToProps = function(store){
	return {
		username: store.login.username
	}
}

const mapDispatchToProps = function(dispatch, ownProps){
	return {
		loadChat: function(chat){
			dispatch(updateChat(chat));
		}
	}
}

 


export default connect(mapStateToProps,mapDispatchToProps)(Friends);