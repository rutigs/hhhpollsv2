"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var PollActions = require('./actions/pollActions');
var AppApi = require('./api/appApi');

AppApi.getOpenPolls(function(openPolls) {
	PollActions.receiveOpenPolls(openPolls);
	AppApi.getClosedPolls(function(closedPolls) {
		PollActions.receiveClosedPolls(closedPolls);
	});
});

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});