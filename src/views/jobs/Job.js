import React from "react";
import AddJob from "./AddJob";
import ChildJob from "./ChildJob";
import { toast } from "react-toastify";

class Job extends React.Component {
  state = {
    listJob: [
      { id: "job1", title: "Developers", salary: 500 },
      { id: "job2", title: "Testers", salary: 350 },
      { id: "job3", title: "Project Manager", salary: 800 },
    ],
  };

  addJob = (job) => {
    this.setState({
      listJob: [...this.state.listJob, job],
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.listJob;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);

    this.setState({
      listJob: currentJobs,
    });
  };

  render() {
    return (
      <>
        <AddJob addJob={this.addJob} />
        <ChildJob listJob={this.state.listJob} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default Job;
