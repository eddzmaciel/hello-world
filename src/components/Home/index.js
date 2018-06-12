//Dependencies
import React,{ Component }from 'react';
import ReactDOM from 'react-dom';

class Home extends Component{

  constructor(){
    super();

    this.state={
      count:0,
      number1:0,
      number2:0,
      data:[]

    };


    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  }


  componentDidMount() {
    this.setState({
      count: 1
    });
  }

  handleCountClick(e) {
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    } else if (e.target.id === 'subtract' && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  }

  handleInputChanged(e) {
    if (e.target.id === 'number1') {
      this.setState({
        number1: Number(e.target.value)
      });
    } else {
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }

  handleResultClick() {
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }

  //adding new components  as examples

  //set state example
  setStateHandler(){
    var item = "Hello i'm the state :P "
    var myArray = this.state.data.slice();
        myArray.push(item);

    this.setState({data:myArray})
  };
  //force update example

  forceUpdateHandler(){
    this.forceUpdate();
  };

  //finding dom node 

  findDomNodeHandler(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color='green';
  };






  render(){
    return(

      <div className="Home">
        <h1>Home Page</h1>
          <h1>1.- Counter Example</h1>
          <h3>Click on " +,- " or " reset ", and this is the result = <b> {this.state.count} </b></h3>
          <p>
            <button id="add" onClick={this.handleCountClick}>+</button>
            <button id="subtract" onClick={this.handleCountClick}>-</button>
            <button id="reset" onClick={this.handleCountClick}>Reset</button>
          </p>
          <h2>Calculator</h2>
          <p>
            <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
            +
            <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />
            <button id="result" onClick={this.handleResultClick}>=</button>
            <strong>{this.state.result}</strong>
          </p>
          <h1> Set State Example </h1>
          <p>setState() method is used to update the state of the component. This method will not replace the state, but only add changes to the original state.
          We started with an empty array. Every time we click the button, the state will be updated. If we click five times, we will get the following output.
          </p>
          <div>
            <button onClick={this.setStateHandler} > Set State </button>
            <h4>State Array:   {this.state.data}</h4>
          </div>

           <h1> Force Update</h1>
           <p> Sometimes we might want to update the component manually. This can be achieved using the forceUpdate() method.
           We are setting a random number that will be updated every time the button is clicked.
           </p>
           <div>
             <button onClick={this.forceUpdateHandler}> Force Update </button>
             <h4>Random number: {Math.random()}</h4>
           </div>

           <h1> Find Dom Node</h1>
           <p> For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.
           </p>

           <div>
                <button onClick = {this.findDomNodeHandler}> Find Dome Node </button>
                <div id = "myDiv">Node</div> 
            </div>
       
 
      </div>

    );
  }
}

export default Home;
