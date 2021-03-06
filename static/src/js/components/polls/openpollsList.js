"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
// var PollsActions = require('../../actions/pollsActions');
// var toastr = require('toastr');

var OpenPollsList = React.createClass({
	// write a createPollRow function and pass the this.props.poll
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
		var rows;
		if(this.props.polls.length > 0) {
			rows = this.props.polls.map(createPollRow, this);
		}
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

module.exports = OpenPollsList;