import React, { Component } from 'react';
import './App.css';

class Content extends Component{
  render() {
    return (
      <article>
        <h3>{this.props.title}</h3>
        {this.props.desc}
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
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
