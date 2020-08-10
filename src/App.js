import React, { Component } from 'react'
import './App.css';
import Player from './components/chooseplayer'
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }


  checkWinner() {
    let winLines =
      [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]

      ]

    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        alert("You won")
        this.setState({
          winner: this.state.player
        })
      }
    }

  }

  handleClick(index) {

    let newBoard = this.state.board;
    if (this.state.player && !this.state.winner) {
      if (this.state.board[index] === null && !this.state.winner) {
        newBoard[index] = this.state.player

        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "0" : "X"
        })

        this.checkWinner()
      }

    }


  }


  setplayer(player) {
    this.setState({
      player
    })
    console.log(player)
  }

  cw(){
    console.log("cw")
    if(this.state.winner){ return (
      <div>
    <h1>winner is {this.state.winner}</h1> 
    <button onClick={()=>this.reset()} >Reset</button>
    </div>
    )}
    else{}
   
  }

  reset(){
    console.log("reset")
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })
  }


  render() {
    const Box = this.state.board.map((box, index) => <div key={index} className='box' onClick={() => this.handleClick(index)}>{box}</div>)
    const status=this.state.player?this.cw():<Player player={(e) => this.setplayer(e)} />
    return (
      <div className='container'>
        <h1>Tic Tac Toe</h1>
        {status}
        <div className='board'>
          {Box}

        </div>
      </div>
    )
  }
}
