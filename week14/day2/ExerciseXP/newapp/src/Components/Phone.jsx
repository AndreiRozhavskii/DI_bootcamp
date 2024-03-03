import React from "react";

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "iPhone",
      model: "15",
      color: "black",
      year: 2024,
    };
  }

  colorChange = () => {
    if (this.state.color === "black") {
      this.setState({ color: "blue" });
    } else {
      this.setState({ color: "black" });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1 >My phone is a {this.state.brand}</h1>
          <h2 >
            It is a {this.state.color} {this.state.model} from {this.state.year}
          </h2>
          <button onClick={this.colorChange}>Color Changed</button>
        </div>
      </>
    );
  }
}

export default Phone;