import React, { PropTypes }  from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'


import FooterComponent from './components/Footer.component';
import VisibleTodoListContainer from './containers/VisibleTodoList.container';
import AddTodoContainer from './containers/AddTodo.container';

class TodoAppModule extends React.Component {

	constructor(props) {
		super(props);

		this.onTodoClick = this.onTodoClick.bind(this);
	}

	onTodoClick(todoId) {
		console.log(todoId);
	}

	render() {
		return (
			<main>

				 <VisibleTodoListContainer />
		

			</main>
			)
	}
}

// function mapStateToProps(state) {
// 	console.log(state);
// 	return {
// 		todos : state.todos.todos
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		showActive : bindActionCreators(showActive, dispatch),
// 		showAll : bindActionCreators(showAll, dispatch),
// 		showCompleted : bindActionCreators(showCompleted, dispatch),
// 	}
// }

export default TodoAppModule;