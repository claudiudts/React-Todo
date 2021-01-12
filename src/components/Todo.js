import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props){
    super()
  }

  handleClick = (e) => {
    this.props.handleToggle(this.props.task.id);
  }

  render(){
    return(
      <div onClick={this.handleClick}>
      <p className={this.props.task.completed ? 'crossout' : ' '}>{this.props.task.task}</p>
      </div>
    )
  }
}

export default Todo;
