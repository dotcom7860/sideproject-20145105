import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component { 
  constructor(props){ //가장 먼저 실행되서 초기화를 담당
    super(props);
    this.state = {
      mode:'read',
      welcome:{title:'Welcome', desc:'Hello.React!!'},
      subject:{title:'WEB', sub:'World wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() { //props,state가 바뀌면 render()함수가 다시 불린다. 즉, 화면을 다시 그린다.
    var _title, _desc = null;
    if(this.state.mode=== 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.setState({ //react에서 정해진 문법
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

//기본적으로 이벤트에서 사용되는 단일 함수 안에는 this가 정해지지 않는다.
//즉, 자기 자신을 가리키는 오브젝트가 없으므로 안에 있는 값들을 수정할 수가 없는데, bind(오브젝트)는 해당 오브젝트를 참조(얕은복사)하여 값을 바꿀 수 있다.
