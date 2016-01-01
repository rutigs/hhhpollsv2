"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/pollActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _openPolls = [];
var _closedPolls = [];

var PollStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getOpenPolls: function() {
		return _openPolls;
	},

	getClosedPolls: function() {
		return _closedPolls;
	},

	getPollBySlug: function(slug) {
		return _.find(_polls, {slug : slug});
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			break;
		case ActionTypes.RECEIVE_OPEN_POLLS:
			_openPolls = action.initialData.openPolls;
			break;
		case ActionTypes.RECEIVE_CLOSED_POLLS:
			_closedPolls = action.initialData.closedPolls;
			break;
		default:
			return true;
	}
	PollStore.emitChange();
});

module.exports = PollStore;