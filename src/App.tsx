import { Component } from "react";
import "./App.css";

const Square = () => <button className="square">{/* TODO */}</button>;

class Board extends Component {
  renderSquare(_: number) {
    return <Square />;
  }

  render() {
    const status = `Next player: X`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
