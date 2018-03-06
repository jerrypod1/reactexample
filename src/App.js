import React, { Component } from 'react';
import './App.css';

let defaultStyle={
  color : "red"
}

class Aggregate extends Component{
  render(){
    return(
      <div style={{width: "40%", display: "inline-block", ...defaultStyle}}>
        <h2>Number and a Text</h2>
      </div>
    )
  }
}

class Filter extends Component{
  render(){
    return(
      <div>
        <img />
        <input type="text"/>
        Filter
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    let headerBiz = {
      color: "black",
      "font-weight": "bold",
      "font-style" : "italic",
      "font-size" : "30px"
    }
    return (
      <div className="App">
        <h1 style = {headerBiz}>Título</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
      </div>
    );
  }
}

export default App;
