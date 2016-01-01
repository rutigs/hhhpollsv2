"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/pollActionTypes');

var PollActions = {
	receiveOpenPolls: function(polls) {
		Dispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_OPEN_POLLS,
			initialData: { openPolls: polls }
		});
	},

	receiveClosedPolls: function(polls) {
		Dispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_CLOSED_POLLS,
			initialData: { closedPolls: polls }
		});
	},
};

module.exports = PollActions;