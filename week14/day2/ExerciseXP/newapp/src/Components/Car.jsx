import React from "react";

class Car extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div >
        <h1>
          This car is a {this.props.color} {this.props.carname.name}
        </h1>
      </div>
    );
  }
}

export default Car;