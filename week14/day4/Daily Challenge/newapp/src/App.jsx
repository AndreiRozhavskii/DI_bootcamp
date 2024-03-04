import "./App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      age: 0,
      gender: "",
      destination: "Greece",
      checkbox: "",
      nutsfree: false,
      lactosefree: false,
      vegan: false,
      nutval: "No",
      dairyval: "No",
      veganval: "No",
    };
  }

  handleNutChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    this.setState({ [e.target.name]: value });
    let nut;
    this.state.nutsfree === false ? (nut = "yes") : (nut = "no");
    this.setState({ nutval: nut });
  };

  handleLactoseChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    this.setState({ [e.target.name]: value });
    let lactose;
    this.state.lactosefree === false ? (lactose = "yes") : (lactose = "no");
    this.setState({ lactoseval: lactose });
  };

  handleVeganChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
    let vegan;
    this.state.vegan === false ? (vegan = "yes") : (vegan = "no");
    this.setState({ veganval: vegan });
  };

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          fname={this.state.fname}
          lname={this.state.lname}
          age={this.state.age}
          gender={this.state.gender}
          destination={this.state.destination}
          checkBox={this.state.checkbox}
          handleNutChange={this.handleNutChange}
          handleDairyChange={this.handleLactoseChange}
          handleVeganChange={this.handleVeganChange}
        />
        <Output
          yourname={"Name: " + this.state.fname + " " + this.state.lname}
          yourage={"Age: " + this.state.age}
          yourgender={"Gender: " + this.state.gender}
          destination={"Destination: " + this.state.destination}
          nutsfree={"Nuts Free: " + this.state.nutval}
          dairyfree={"Lactose Free:" + this.state.lactoseval}
          vegan={"Vegan: " + this.state.veganval}
          value={this.state.destination}
        />
      </div>
    );
  }
}

export default App;