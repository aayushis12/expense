import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;

class Post extends React.Component{
  constructor(props){
    
    super(props);
    this.state={
      text:this.props.text,
      isEdit:false
    }
    this.deletethisExpense=this.deletethisExpense.bind(this);
    this.updatethisExpense=this.updatethisExpense.bind(this);
    this.editExpense=this.editExpense.bind(this);
    this.onchange=this.onchange.bind(this);
  }
  deletethisExpense(i){
    this.props.deleteExpense(i);
  }
  editExpense(){
    this.setState({
      isEdit:true
    })
  }
  onchange(e){
    this.setState({
      text:e.target.value
    })
  }
  updatethisExpense(i){
    this.props.updateExpense(i,this.state.text);
    this.setState({
      isEdit:false
    })
  }
  render(){
  	var date=this.props.date;
  	//var onlyDate=date.getDate();
    if(this.state.isEdit===false){
    return(
      <div>
      	<div  className='post'><span> {this.props.text} | </span>
          <span>Date:{date} </span>
           </div>
      	<div className="edit-delete-btn">
      	<a onClick={this.editExpense}>edit</a>
      	<a onClick={this.deletethisExpense.bind(this,this.props.i)}>Delete</a>
      	
      	</div>
      </div>
    )
  }else{
    return(
      <div><input type='text' value={this.state.text} onChange={this.onchange}/>
        <button onClick={this.updatethisExpense.bind(this,this.props.i)}>Update</button>
      </div>
    )
  }
  }
  
}


module.exports={
	Post:Post
}