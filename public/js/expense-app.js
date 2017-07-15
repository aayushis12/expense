//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;
import {Save} from './Save.js';
import {Display} from './display.js'

class ExpenseApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:'',
      list:[]
  }

    this.addExpense=this.addExpense.bind(this);
    this.deleteExpense=this.deleteExpense.bind(this);
    this.updateExpense=this.updateExpense.bind(this);
  }
  addExpense(savetext){
    var list=this.state.list;
       list.push({
      text: savetext,
      date: "" +new Date()
    });
    this.setState({
      list:list
    })
    //console.log(list);
    //window.localStorage.setItem('list', list);
  }
  deleteExpense(i){
    var list=this.state.list;
    list.splice(i,1);
    this.setState({
      list:list
    })
  }
  updateExpense(i,newText){
    var list=this.state.list;
    list[i]=newText;
    this.setState({
      list:list
    })
  }
  render(){
    return(
      <div className="check">
       <Save text={this.state.input} saveText={this.addExpense}/>
        <Display display={this.state.list} deleteExpense={this.deleteExpense} updateExpense={this.updateExpense}/>
       </div>
    )
  }
}

ReactDom.render(<ExpenseApp/>,document.getElementById('container'));