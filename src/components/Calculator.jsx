var React = require('react');
var NumberField = require('./NumberField.jsx');

var marginBottom = {
  marginBottom: 20
}

var Calculator = React.createClass({
  getInitialState: function(){
    return({value: ""});
  },
  onClick: function(e){
    var operator = e.target.value;
    var number1 = parseInt(this.refs.Number1.state.value);
    var number2 = parseInt(this.refs.Number2.state.value);
    var result = "";

    if(operator === "+"){
      result = number1 + number2;
      console.log("Plus");
    } else if (operator === "-"){
      result = number1 - number2;
      console.log("Minus");
    } else if (operator === "/"){
      result = number1 / number2;
      console.log("Delat");
    } else if (operator === "*"){
      result = number1 * number2;
      console.log("Gånger");
    }

    this.setState({value: result});
    console.log("operator:" + operator + " num1:" + number1 + " num2:" + number2 + " result:" + result);
  },
  clearInputs: function(){
    this.refs.Number1.clear();
    this.refs.Number2.clear();
    this.setState({value: ""});
  },
  render: function(){
    return(
      <div className="row">
        <div className="col-md-6 panel panel-default">
          <h1>Simple Calculator</h1>
          <div className="panel-body">
            <div className="row form-group">
              <NumberField ref="Number1" placeholder="1337" />
              <NumberField ref="Number2" placeholder="2108" />
            </div>
            <div className="row" style={marginBottom}>
              <div className="col-sm-3">
                <button type="btn" className="btn btn-primary btn-block" value="+" onClick={this.onClick}>+ Add</button>
              </div>
              <div className="col-sm-3">
                <button type="btn" className="btn btn-primary btn-block" value="-" onClick={this.onClick}>- Subtract</button>
              </div>
              <div className="col-sm-3">
                <button type="btn" className="btn btn-primary btn-block" value="/" onClick={this.onClick}>/ Devide</button>
              </div>
              <div className="col-sm-3">
                <button type="btn" className="btn btn-primary btn-block" value="*" onClick={this.onClick}>* Multiply</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9">
                <div className="form-group">
                  <input className="form-control" placeholder="Result" value={this.state.value} readOnly/>
                </div>
              </div>
              <div className="col-sm-3">
                <button type="btn" className="btn btn-danger btn-block" onClick={this.clearInputs}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Calculator;
