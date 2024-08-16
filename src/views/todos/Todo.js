import React from "react";
import "./Todo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class Todo extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };
  addTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });
  };

  deleteOneTodo = (todo) => {
    let currentListTodo = this.state.listToDo;
    currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);

    this.setState({
      listToDo: currentListTodo,
    });
  };

  editOneTodo = (todo) => {
    let { listToDo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listToDoCopy = [...listToDo];
      let indexObj = listToDoCopy.findIndex((obj) => obj.id === todo.id);

      listToDoCopy[indexObj].title = editTodo.title;
      this.setState({
        listToDo: listToDoCopy,
        editTodo: {},
      });

      toast.success("Edit todo success");

      return;
    }

    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeTitle = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;

    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listToDo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <div className="list-todo-container">
          <div>List todo with react js</div>
          <AddTodo addTodo={this.addTodo} />
          <div className="list-todo-content">
            {listToDo &&
              listToDo.length > 0 &&
              listToDo.map((item, index) => {
                return (
                  <>
                    <div className="todo-child">
                      {isEmptyObj === true ? (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      ) : (
                        <>
                          {editTodo.id === item.id ? (
                            <span>
                              {index + 1} -{" "}
                              <input
                                value={editTodo.title}
                                onChange={(event) => {
                                  this.handleOnChangeTitle(event);
                                }}
                              />
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.title}
                            </span>
                          )}
                        </>
                      )}
                      <div className="action">
                        <input
                          type="submit"
                          value={
                            isEmptyObj === false && editTodo.id === item.id
                              ? "Save"
                              : "Edit"
                          }
                          className="btn-edit"
                          onClick={() => this.editOneTodo(item)}
                        />
                        <input
                          type="submit"
                          value="Delete"
                          className="btn-delete"
                          onClick={() => {
                            this.deleteOneTodo(item);
                          }}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
