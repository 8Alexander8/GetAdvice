import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fatchApiForAdvice();
  }

  fatchApiForAdvice = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        console.log(advice);
        //if the value of state and the const is the same we can put just the name of the const (instet of ({advice: advice}))
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fatchApiForAdvice}>
            <span>GIVE ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
