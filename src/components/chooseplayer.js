import React, { Component } from 'react'

export default class chooseplayer extends Component {

    handleform(e){
e.preventDefault();
console.log(e.target.player.value)

this.props.player(e.target.player.value)
    }
    render() {
        return (
           <form onSubmit={(e)=>{this.handleform(e)}}>
               <label>
                   Player X
                   <input type="radio" name="player" value="X"/>
               </label>
               <label>
                   Player 0
                   <input type="radio" name="player" value="0"/>
               </label>
               <input type="submit" value="start" />
           </form>
        )
    }
}
