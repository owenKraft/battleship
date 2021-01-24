import React from 'react';
import Row from './Row';

const Grid = (props) => {
    const gridSize = 8
    let rowIndex = -1

    const grid = [...new Array(props.gridSize || gridSize)]
    .map(i => i = <Row 
            key = {rowIndex}
            gridSize={props.gridSize}
            row={rowIndex += 1}
            agent={props.agent}
            board={props.board}
            ships={props.ships}
            compName = {props.compName}
            gameState = {props.gameState}
            updateGame = {props.updateGame}
            updateGameState = {props.updateGameState}
            updateMessage = {props.updateMessage}
            whenCellClicked={props.whenCellClicked}
        />
    )

    return (
        <div className="grid">
            {grid}
        </div>
    )
}

export default Grid