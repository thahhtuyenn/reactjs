import React from "react";
import { toast } from "react-toastify";

class AddJob extends React.Component {
  state = {
    id: "",
    title: "",
    salary: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleClickSubmit = (event) => {
    event.preventDefault();

    if (!this.state.salary || !this.state.title) {
      toast.error("Missing required params!");
      return;
    }

    this.props.addJob({
      id: Math.floor(Math.random() * 1111),
      title: this.state.title,
      salary: this.state.salary,
    });

    toast.success("Add job success");

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job's title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleClickSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddJob;
