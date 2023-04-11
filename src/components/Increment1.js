import React from "react";
class Increment1 extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
  }
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  handleClick = () => {
    this.setState((prevState) => ({
      val: prevState.val + 1,
    }));
  };
  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default Increment1;
