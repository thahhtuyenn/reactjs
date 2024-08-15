import React from "react";

class ChildJob extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { showJob } = this.state;
    let arrJobs = this.props.listJob;

    return (
      <>
        {showJob === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="list-jobs">
              {arrJobs.map((value, index) => {
                return (
                  <div key={value.id}>
                    {value.title} - {value.salary} <></>{" "}
                    <span onClick={() => this.handleOnClickDelete(value)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildJob;
