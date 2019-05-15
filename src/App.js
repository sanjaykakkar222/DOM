import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.inputText=React.createRef();
 
  }

  // changeval = (val) => {
  //   this.input = val
  // }

  handleInput(str)
  {
  // const {value}=event.target;
  //   document.getElementById('inp').innerHTML=value


  this.inputText.current.focus();
  this.inputText.current.value=str;




  }

  render() {

    console.log(this.input)
const names =

React.createElement('div', {},
  React.createElement('h1', {}, 'listofnames'),
  React.createElement('ul', {},
    React.createElement('li', {onClick:()=>{this.handleInput('alan')}}, 'alan'),
    React.createElement('li', {onClick:()=>{this.handleInput('luka')}}, 'luka'),
    React.createElement('li', {onClick:()=>{this.handleInput('martin')}}, 'martin')


  ),

  React.createElement('input', {
    id:"inp",
    type: 'text',
    placeholder:'Name',
    ref:this.inputText
    // value: this.input.current ? this.input.current.value : '' 
  }, null)
)



    return ( 
      <div>
        {names}
      </div>
    );

  }
}


export default App;