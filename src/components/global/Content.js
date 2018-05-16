import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Content.css';

class Content extends Component {
  //for read our props
  constructor(){
    //to have access to this, we use constructor(props) and super(props);
    super();
    this.state={
      count:0
    };
    this.handleCountClick=this.handleCountClick.bind(this);
  }

  componentDidMount(){
    this.setState({
      count:1
    });
  }

  handleCountClick(e){
    console.log(e);
    if(e.target.id=='add'){
      this.setState({
        count: this.state.count+1
      });
    } else if(e.target.id=='less' && this.state.count>0){
      this.setState({
        count:  this.state.count-1
      });
    } else{
      this.setState({
        count:0
      });
    }
  }

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


      </div>
    );
  }
}

export default Content;
