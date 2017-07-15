import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;
import {Post} from './post.js';

class Display extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      list:nextProps.display
    })
  }
  render(){
      var renderList=this.state.list;
    var listElements=[];
    for(var i=0;i<renderList.length;i++){
      listElements.push(<Post text={renderList[i].text} date={renderList[i].date} i={i} deleteExpense={this.props.deleteExpense} updateExpense={this.props.updateExpense}/>);
    }
    return(
      <div>{listElements}</div>
    )
  }
}

module.exports={
  Display:Display
}
