import React from 'react'
import Grid from './Grid'
import GameLogic from './GameLogic'
import placeCompShips from './placeCompShips'
import ShipSelector from './ShipSelector'

const GameBoard = (props) => {
    const gameLogic = GameLogic()
    let displayName
    let shipSelector

    if(props.agent === "computer"){
        placeCompShips(props.board,props.ships)
        displayName = props.compName + "'s"
    } else {
        displayName = "Your"
        shipSelector = <ShipSelector />
    }

    return (
        <div className="gameboard">
            <h2>{displayName} board</h2>
            <Grid 
                gridSize={8}
                agent={props.agent}
                board={props.board}
                ships={props.ships}
                compName = {props.compName}
                gameState = {props.gameState}
                updateGame = {props.updateGame}
                updateGameState = {props.updateGameState}
                updateMessage = {props.updateMessage}
                whenCellClicked={gameLogic.whenCellClicked}
            />
            {shipSelector}
        </div>
    )
}

export default GameBoard