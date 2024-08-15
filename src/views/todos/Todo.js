import React from "react";
import AddTodo from "./AddTodo";

class Todo extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };
  addTodo = (todo) => {};
  render() {
    let { listToDo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <div>List todo with react js</div>
        <AddTodo />
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
      </>
    );
  }
}

export default Todo;
