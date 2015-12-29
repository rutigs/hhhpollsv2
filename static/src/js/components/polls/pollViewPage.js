"use strict";

var React = require('react');

var PollViewPage = React.createClass({
	// componentWillMount: function() {
	// 	var slug = this.props.params.slug;
	// 	if(slug) {
	// 		this.setState({ poll: PollStore.getPollBySlug });
	// 	}
	// },
	render: function() {
		return (
			<div>
				<h1>This is the PollViewPage</h1>
			</div>
		);
	}
});

module.exports = PollViewPage;