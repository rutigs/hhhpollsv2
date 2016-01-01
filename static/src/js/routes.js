"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var IndexPage = require('./components/app');
var HomePage = require('./components/homePage');
var AboutPage = require('./components/about/aboutPage');
var PollsPage = require('./components/polls/pollsPage');
var PollViewPage = require('./components/polls/pollViewPage');
var NotFoundPage = require('./components/NotFoundPage');

var routes = (
	<Route name="app" path="/" handler={IndexPage}>
		<DefaultRoute handler={HomePage} />
		<Route name="about" handler={AboutPage} />
		<Route name="polls" handler={PollsPage} />
		<Route name="pollView" path="polls/:slug" handler={PollViewPage} />
		<NotFoundRoute handler={NotFoundPage} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

//<NotFoundRoute handler={NotFoundPage} />
module.exports = routes;