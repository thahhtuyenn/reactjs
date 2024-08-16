import React from "react";
import "./Todo.scss";
import { toast } from "react-toastify";

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

  handleAddTodo = (event) => {
    event.preventDefault();

    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }

    this.props.addTodo({
      id: Math.floor(Math.random() * 1111),
      title: this.state.title,
    });

    toast.success("Add todo success");
    this.setState({
      id: "",
      title: "",
    });
  };

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
