import React, { Component } from 'react';
import './App.css';

class Content extends Component{
  render() {
    return (
      <article>
        <h3>HTML</h3>
        HTML is ~~~
      </article>
    );
  }
}

class TOC extends Component{
  render() {
    return (
      <nav>
        <ul>
          <li><a href="index.html">HTML</a></li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </nav>
    );
  }
}

class Subject extends Component{
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!!
      </header>
    );
  }
}

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
