import React from 'react';

export default class Repo extends React.Component {
	render () {
		return (
			 <div>
			 	<h2>{this.props.params.repoName}</h2>
			 	<h2>{this.props.params.userName}</h2>
			 </div>
			)
	}
}