import React from 'react';

export default class AddTodo extends React.Component {

	constructor(props) {
		super(props);

this.state = {value : ""};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

		console.log("ADD => ", this.props, this.props.latestTodoId);
	}

	handleChange(e) {
		this.setState({value : e.target.value});
	}

	handleSubmit(e) {
		let uniqueId = this.props.latestTodoId + 1;
		this.props.onAddTodo(this.state.value, uniqueId)
		this.setState({value : ""});
		e.preventDefault();
	}

	render() {
		return (
			<form id="addTodoForm" onSubmit = {this.handleSubmit}>
				<input type="text" value={this.state.value} name="todoName" onChange = {this.handleChange}/>
				<button>Add Todo</button>
			</form>
			)
	}

}