"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');

var PollActionTypes = require('../constants/pollActionTypes');
var AppApi = require('../api/appApi');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: PollActionTypes.INITIALIZE,
			initialData: {
				openPolls: AppApi.getOpenPolls(),
				closedPolls: AppApi.getClosedPolls()
			}
		});
	}
};

module.exports = InitializeActions;