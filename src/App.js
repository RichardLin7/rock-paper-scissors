import React from "react";

//create 3 buttons ... done
//create a random bot that randomly chooses rock, paper, scissor ... done
//create method that compares user input vs random input ... done

class App extends React.Component {
  render() {
    return (
      <div>
        You Chose: {this.state.pChoice}
        <p></p>
        Bot Chose: {this.state.rChoice}
        <p></p>
        Result: {Judge(this.state.pChoice, this.state.rChoice)}
        <p></p>
        <button onClick={this._handleRock}>Rock</button>
        <button onClick={this._handlePaper}>Paper</button>
        <button onClick={this._handleScissors}>Scissors</button>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      pChoice: "",
      rChoice: "",
      result: "",
    };

    this._handleRock = this._handleRock.bind(this);
    this._handlePaper = this._handlePaper.bind(this);
    this._handleScissors = this._handleScissors.bind(this);
  }

  _handleRock() {
    this.setState({ pChoice: "rock" });
    this.setState({ rChoice: Bot() });
  }

  _handlePaper() {
    this.setState({ pChoice: "paper" });
    this.setState({ rChoice: Bot() });
  }

  _handleScissors() {
    this.setState({ pChoice: "scissors" });
    this.setState({ rChoice: Bot() });
  }
}

function Bot() {
  const choices = ["rock", "paper", "scissors"];
  var num = Math.floor(Math.random() * (3 - 1 + 1));
  console.log("bot chose: " + choices[num]);
  return choices[num];
}

function Judge(p, r) {
  if (p === r) {
    console.log("TIE");
    return "TIE";
  }
  if (p === "rock" && r === "scissors") {
    console.log("YOU WIN");
    return "YOU WIN";
  }
  if (p === "rock" && r === "paper") {
    console.log("YOU LOSE");
    return "YOU LOSE";
  }
  if (p === "scissors" && r === "rock") {
    console.log("YOU LOSE");
    return "YOU LOSE";
  }
  if (p === "scissors" && r === "paper") {
    console.log("YOU WIN");
    return "YOU WIN";
  }
  if (p === "paper" && r === "rock") {
    console.log("YOU WIN");
    return "YOU WIN";
  }
  if (p === "paper" && r === "scissors") {
    console.log("YOU LOSE");
    return "YOU LOSE";
  }
}
export default App;
