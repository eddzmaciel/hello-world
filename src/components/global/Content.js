import React, { Component } from 'react';
//import logo from './images/logo.svg';
import './css/Content.css';

class Content extends Component {
  //for read our props
  /*constructor(){*/
    //to have access to this, we use constructor(props) and super(props);
   /* super();
    this.state={
      count:0,
      num1:0,
      num2:0,
      result:0
    };*/
    //do this for all the functions that we use in our code
   /* this.handleCountClick=this.handleCountClick.bind(this);
    this.handleResultClick=this.handleResultClick.bind(this);
    this.handleInputChanged=this.handleInputChanged.bind(this);

  };*/

 /* componentDidMount(){
    this.setState({
      count:1
    });
  };
  handleCountClick(e){
    console.log(e);
    if(e.target.id==='add'){
      this.setState({
        count: this.state.count+1
      });
    } else if(e.target.id==='less' && this.state.count>0){
      this.setState({
        count:  this.state.count-1
      });
    } else{
      this.setState({
        count:0
      });
    }
  };*/


 /* handleResultClick(e){
    this.setState({
      result: this.state.num1 + this.state.num2
    });
  };*/
//here we assing the value to the target input field, and assing the value to the var

  /*handleInputChanged(e){
    if(e.target.id==='number1'){
      this.setState({
        num1: Number(e.target.value)
      });
    }else{
      this.setState({
        num2: Number(e.target.value)
      });
    }
  };*/

  render() {
    console.log('render ejecutado');
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="less" onClick={this.handleCountClick}>-</button>
          <button id="rest" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2>Calculator</h2>

        <p>
          {/*assing a state to the inputs*/}
          <input id="number1" type="number" value={this.state.num1} onChange={this.handleInputChanged}/> +
          <input id="number2" type="number" value={this.state.num2} onChange={this.handleInputChanged}/>
          <button id="add2" onClick={this.handleResultClick}>Add</button>
        </p>
        <h4>Result = {this.state.result}</h4>
      </div>
    );
  }
}

export default Content;
