import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push("/todos");
    }, 3000);
  }
  //HOC: higher order component
  render() {
    console.log("check props: ", this.props);

    return (
      <>
        <div>Home page react js</div>
      </>
    );
  }
}

export default Color(Home);
