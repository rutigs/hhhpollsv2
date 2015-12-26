"use strict";

var React = require('React');

var About = React.createClass({
    render: function() {
                return(
                    <div>
                        <h1>About</h1>
                        <p>
                            This application uses the following technologies:
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>Django Rest Framework</li>
                                <li>React</li>
                                <li>React Router</li>
                                <li>Flux</li>
                                <li>Gulp</li>
                                <li>Browserify</li>
                                <li>Bootstrap</li>
                           </ul>
                       </p>
                   </div>
                );
            }
});

module.exports = About;
