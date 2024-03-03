import React from "react";

class Garage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div >
        <h1>Who lives in my {this.props.size} garage?</h1>
      </div>
    );
  }
}

export default Garage;