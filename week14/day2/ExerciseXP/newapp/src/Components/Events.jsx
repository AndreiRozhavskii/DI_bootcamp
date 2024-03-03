import React from "react";

class Events extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div >
          <button onClick={this.props.clickFunction}>Click me</button>
        </div>
        <div >
          <input id="input" onKeyPress={this.props.handleKeyPress}></input>
        </div>
        <div >
          <button onClick={this.props.isToggleFunction}>{this.props.textTextContent}</button>
        </div>
      </>
    );
  }
}

export default Events;