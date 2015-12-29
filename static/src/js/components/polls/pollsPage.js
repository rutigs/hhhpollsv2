"use strict";

var React = require('react');
var PollStore = require('../../stores/pollStore');
var AppApi = require('../../api/appApi')

var OpenPollsList = require('./openpollsList');
var ClosedPollsList = require('./closedpollsList');

var PollsPage = React.createClass({
	getInitialState: function() {
		return {
			openPolls: PollStore.getOpenPolls(),
			closedPolls: PollStore.getClosedPolls()
		};
	},

	componentWillMount: function() {
		PollStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		PollStore.removeChangeListener(this._onChange)
	},

	_onChange: function() {
		this.setState({ openPolls : PollStore.getOpenPolls,
						closedPolls: PollStore.getClosedPolls });
	},

	render: function() {
		return (
			<div>
				<h1>Polls</h1>
				<OpenPollsList polls={this.state.openPolls} />
				<ClosedPollsList polls={this.state.closedPolls} />
			</div>
		);
	}
});

module.exports = PollsPage;

// componentWillMount: function() {
// 	$.ajax({
// 		url: baseURL + 'polls/?open=True' + inJson,
// 		success: function(data) {
// 			this.setState({openPolls: data});
// 		}.bind(this),
// 		error: function(xhr, status, err) {
// 			console.error(status, err.toString());
// 		}.bind(this)
// 	});
// 	$.ajax({
// 		url: baseURL + 'polls/?open=False' + inJson,
// 		success: function(data) {
// 			this.setState({closedPolls: data});
// 		}.bind(this),
// 		error: function(xhr, status, err) {
// 			console.error(status, err.toString());
// 		}.bind(this)
// 	});
// },