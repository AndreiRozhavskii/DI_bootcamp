import './App.css'
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  voteRaise = (i) => {
    const languages_copy = [...this.state.languages];
    languages_copy[i].votes = languages_copy[i].votes + 1;
    this.setState({ languages: languages_copy });
    
  };

  render() {
    return (
      <div>
        {this.state.languages.map((lang, i) => {
          return (
            <button onClick={() => this.voteRaise(i)}>
              {lang.name} {lang.votes}
            </button>
          );
        })}
      </div>
    );
  }
}

export default App;