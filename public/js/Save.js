import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;

class Save extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:this.props.text
    }
    this.changeText=this.changeText.bind(this);
    this.addtoExpense=this.addtoExpense.bind(this);
  }
  changeText(e){
    this.setState({
      input:e.target.value
    })
  }
  addtoExpense(){
    this.props.saveText(this.state.input);
    this.setState({
      input:''
    })
  }
    render(){
    return(
      <div className='input'>
        <input type='text' value={this.state.input} onChange={this.changeText}/>
        <input type='button' value='Add' onClick={this.addtoExpense} className="btn btn-primary"/>
      </div>
    )
  }
}

module.exports={
  Save:Save
}