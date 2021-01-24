import React from 'react';
import Cell from './Cell';

const Row = (props) => {
    const gridSize = 8
    let columnIndex = -1

    const row = [...new Array(props.gridSize || gridSize)]
    .map(i => i = <Cell 
            key = {columnIndex}
            row={props.row}
            column={columnIndex += 1}
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
        <div className="row">
            {row}
        </div>
    )
}

export default Row