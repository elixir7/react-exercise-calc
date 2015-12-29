var React = require('react');

var NumberField = React.createClass({
  getInitialState: function(){
    return({value: ""});
  },
  onChange: function(e){
    this.setState({value: e.target.value});
  },
  clear: function(){
    this.setState({value: ""});
  },
  render: function(){
    return(
      <div className="col-sm-6">
        <input className="form-control" type="text" placeholder={"NUMBER e.g. " + this.props.placeholder} value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
});

module.exports = NumberField;
