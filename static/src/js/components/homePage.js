"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>HipHopHeads Polls</h1>
                <p>A site devoted to the community at <a href="http://www.reddit.com/r/HipHopHeads">/r/HipHopHeads</a> for voting on all things Hip Hop.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    } 
});

module.exports = Home;
