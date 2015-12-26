"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="static/dist/images/hhhlogo.png" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><a href="https://www.reddit.com/r/hiphopheads">REDDIT</a></li>
                        <li><Link to="authors">POLLS</Link></li>
                        <li><Link to="about">ABOUT</Link></li>
                   </ul>
               </div>
           </nav>
        );
    }
});

module.exports = Header;