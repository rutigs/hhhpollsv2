"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
// var PollsActions = require('../../actions/pollsActions');
var toastr = require('toastr');

var OpenPollsList = React.createClass({
	// write a createPollRow function and pass the this.props.polls
	render: function() {
		return (
			<div>
				<table className="table">
					<thead>
						<th>Name</th>
						<th>Info</th>
						<th>URL</th>
					</thead>
					<tbody> // {this.props.authors.map(createPollRow, this)}
						<tr key=1>
							<td>Hardest Grinder of 2015</td>
							<td></td>
							<td></td>
						</tr>
						<tr key=2>
							<td>Best Album of 2015</td>
							<td></td>
							<td></td>
						</tr>
						<tr key=2>
							<td>Best track of 2015</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
		);
	}
});

module.exports = OpenPollsList;