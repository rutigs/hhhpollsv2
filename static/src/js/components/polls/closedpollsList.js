"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
// var PollsActions = require('../../actions/pollsActions');
// var toastr = require('toastr');

var ClosedPollsList = React.createClass({
	// write a createPollRow function and pass the this.props.polls
	render: function() {
		var createPollRow = function(poll) {
			return (
				<tr key={poll.id}>
					<td><Link to="pollView" params={{slug: poll.slug}}>{poll.name}</Link></td>
					<td>{poll.info}</td>
					<td>{poll.embed_url}</td>
				</tr>
			);
		};
		return (
			<div>
				<table className="table">
					<thead>
						<th>Open Polls</th>
						<th>Info</th>
						<th>URL</th>
					</thead>
					<tbody>
						{this.props.polls.map(createPollRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = ClosedPollsList;