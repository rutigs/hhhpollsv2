"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
/*
	Put the stores and actions here
	var PollsStore = require('../../stores/pollsStore');
	var PollsStore = require('../../actions/pollsActions');
*/
var OpenPollsList = require('./openpollsList');
var ClosedPollsList = require('./closedpollsList');

var PollsPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Polls</h1>
				//<Link to="addPoll" className="btn btn-default">Create Poll</Link>
				<OpenPollsList /> // pass polls here later
				<ClosedPollsList /> // pass polls here later
			</div>
		);
	}
});

module.exports = PollsPage;