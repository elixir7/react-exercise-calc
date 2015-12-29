var React = require('react');
var Link = require('react-router').Link

var Base = React.createClass({
  render: function(){
    return(
      <div className="container">
        <h1>React Exercise Calculator</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base;
