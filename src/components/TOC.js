import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
      // console.log('===>TOC render shouldComponentUpdate',newProps.data,this.props.data); //concat으로  저장했기에 이전 값과 현재 값의 내용이 다르다는 걸 알 수 있다.
      if(newProps.data === this.props.data){
        return false;
      }
      return true;
    }
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
      lists.push(
      <li key={data[i].id}>
        <a 
        href={'/content/'+data[i].id}
        data-id={data[i].id}
        onClick={function(e){
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}>{data[i].title}</a></li>);
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;