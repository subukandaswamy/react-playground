import React from "react";

class Increment1 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      val: 10,
      val2: 20,
    };
  }
  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  handClick = () => {
    //this.state.val += 1;
    this.setState((prevState) => ({ val: prevState.val + this.props.step }));
    console.log(this.state.val);
  };
  render() {
    const name = "subu";
    return (
      <div>
        <p>{this.state.val}</p>
        <button onClick={this.handClick}>Increment</button>
      </div>
    );
  }
}
export default Increment1;
