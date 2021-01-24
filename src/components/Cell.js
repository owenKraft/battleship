import React from 'react';
import Emoji from 'a11y-react-emoji';
import GameLogic from './GameLogic'

const Cell = (props) => {
    const gameLogic = GameLogic()
    const agent = props.agent
    const board = props.board
    const ships = props.ships
    const gameState = props.gameState


    const whenCellClicked = (e) => {
        let ship = ships[document.getElementById("ship-dropdown").value]
        let orientation = document.getElementById("orientation-dropdown").value
        if(agent === "player" && gameState === "setup"){
            const coordinates = gameLogic.getCoordinates(e)
            const attemptShipPlacement = board.placeShip(ship,[coordinates.x,coordinates.y],orientation)
            gameLogic.displayPlayerShip(attemptShipPlacement)
            if(attemptShipPlacement.length !== 0){
                const selector = document.getElementById("ship-dropdown")
                gameLogic.removeShipFromSelector(ship.name,selector)
                if(!selector.options.length){
                    props.updateGameState("player turn")
                    gameLogic.updateInfoPanel("success")
                    props.updateMessage("Your fleet has been positioned. Make the first attack!")
                }
            }
        } else if(agent === "computer" && gameState === "player turn"){
            const clickCompCell = gameLogic.clickCompCell(e,board,ships)
            console.log("clickCompCell = ",clickCompCell)
            if(clickCompCell === "already clicked"){
                document.querySelector(".info-panel").classList.add("info-panel-warning")
                props.updateMessage("Try another square.")
            } else {
                props.updateGame(board,ships)
                const checkIfAllShipsSunk = gameLogic.checkIfAllShipsSunk(ships)
                if(checkIfAllShipsSunk === true){
                    props.updateGameState("game over")
                    gameLogic.updateInfoPanel("success")
                    props.updateMessage(`You won! To play again, click 'New Game' in the upper right hand corner.`)
                } else {
                    let result
                    if(clickCompCell === false){
                        result = "Miss! "
                        gameLogic.updateInfoPanel()
                    } else if(clickCompCell === true){
                        result = "Hit! "
                        gameLogic.updateInfoPanel("success")
                    }
                    props.updateMessage(result + props.compName + " is thinking...")
                    props.updateGameState("comp turn")
                }
            }
        } else if(agent === "computer" && gameState === "setup"){
        } 
    }

    const onHover = (e) => {
        if(agent === "player" && gameState === "setup"){
            let ship = ships[document.getElementById("ship-dropdown").value]
            let orientation = document.getElementById("orientation-dropdown").value

            const coordinates = gameLogic.getCoordinates(e)
            gameLogic.displayShipPreview(coordinates,ship,orientation,board)
        } else if(agent === "computer" && gameState === "setup"){
            e.target.classList.add("invalid")
        } else if(agent === "computer" && (gameState !== "setup" && gameState !== "game over")){
            if(e.target.closest(".cell").classList.contains("hit") || e.target.closest(".cell").classList.contains("miss")){
                e.target.closest(".cell").classList.add("invalid")
            } else if(!e.target.closest(".cell").classList.contains("hit") || !e.target.closest(".cell").classList.contains("miss")){
                e.target.closest(".cell").classList.add("valid")
            }
        }
    }

    const offHover = (e) => {
        if(props.agent === "player" && gameState === "setup"){
            const cells = document.querySelectorAll(".placeShip, .placeShip-invalid")
            cells.forEach(i => i.classList.remove("placeShip","placeShip-invalid"))
        } else if(agent === "computer" && gameState === "setup"){
            e.target.classList.remove("invalid")
        } else if(agent === "computer" && (gameState !== "setup" && gameState !== "game over")){
            e.target.closest(".cell").classList.remove("valid")
            e.target.closest(".cell").classList.remove("invalid")
        }
    }


    return (
        <div className={`cell ${props.agent}`} data-row={props.row} data-column={props.column} data-agent={props.agent} onClick={(e) => whenCellClicked(e)} onMouseOver={(e) => onHover(e)} onMouseOut={(e) => offHover(e)}>
            <div>
                <Emoji symbol="🔥" label="hit" className="emoji hit-icon hidden"/>
                <Emoji symbol="✖️" label="miss" className="emoji miss-icon hidden"/>
            </div>
        </div>
    )
}

export default Cell