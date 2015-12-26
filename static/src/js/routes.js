"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var IndexPage = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorsPage = require('./components/authors/authorPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var AboutPage = require('./components/about/aboutPage');
var NotFoundPage = require('./components/NotFoundPage');

var routes = (
	<Route name="app" path="/" handler={IndexPage}>
		<DefaultRoute handler={HomePage} />
		<Route name="authors" handler={AuthorsPage} />
		<Route name="addAuthor" path="author" handler={ManageAuthorPage} />
		<Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage} />
		<Route name="about" handler={AboutPage} />
		<NotFoundRoute handler={NotFoundPage} />
		<Redirect from="about-us" to="about" />
		<Redirect from="awthurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;