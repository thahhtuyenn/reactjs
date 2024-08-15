import React from "react";

class AddTodo extends React.Component {
  state = {
    id: "",
    title: "",
  };

  handleChangeTodo = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = (event) => {};

  render() {
    return (
      <div className="add-todo">
        <input
          value={this.state.title}
          onChange={(event) => {
            this.handleChangeTodo(event);
          }}
          className=""
          type="text"
        />
        <input
          className="btn-add"
          type="button"
          value="Add"
          onClick={(event) => {
            this.handleAddTodo(event);
          }}
        />
      </div>
    );
  }
}

export default AddTodo;
