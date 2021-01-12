import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      id: '',
      completed: false
    }
  }

  handleChanges = e => {
    this.setState({
      textInput: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTask(this.state.textInput)
    this.setState({
      textInput: ''
    })
  };

  render(){
    return(
      <form>
        <input onChange={this.handleChanges} value={this.state.textInput} type='text' name="task" />
        <button onClick={this.handleSubmit}>Add Thing</button>
        <button onClick={this.props.handleClearTask}>Delete Thing</button>
      </form>
    )
  }
}

export default TodoForm;