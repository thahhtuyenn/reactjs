import React from "react";
import "./Home.scss";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todos");
    }, 3000);
  }
  //HOC: higher order component
  render() {
    console.log("check props: ", this.props);

    return (
      <>
        <div className="home-page">Home page react js</div>
      </>
    );
  }
}

export default withRouter(Home);
