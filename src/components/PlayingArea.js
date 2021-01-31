import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import GameBoard from './GameBoard'
import GameLogic from './GameLogic'
import gameboardFactory from './gameboardFactory'
import InfoPanel from './InfoPanel'
import compAI from './CompAI'

const PlayingArea = (props) => {
    const gameLogic = GameLogic()
    const [gameState,setGameState] = useState("setup")

    const [playerBoard,setPlayerBoard] = useState(gameboardFactory())
    const [playerShips,setPlayerShips] = useState(gameLogic.createShips())

    const [compName,setCompName] = useState(gameLogic.getAdmiral())
    const [compBoard,setCompBoard] = useState(gameboardFactory())
    const [compShips,setCompShips] = useState(gameLogic.createShips())
    const [compLastTurn,setCompLastTurn] = useState({
        mode: "random",
        resultsArray: null,
        direction: null,
    })

    const [message,setMessage] = useState("Place your fleet on your board!")

    const updateCompLastTurn = (turnInfo) => {
        setCompLastTurn(turnInfo)
    }

    const updateGameState = (gameState) => {
        setGameState(gameState)
        if(gameState === "comp turn"){
            runCompTurn()
            // if(gameLogic.checkIfAllShipsSunk(playerShips)){
            //     endGame()
            //     setMessage("Oh no! Your enemy has sunk all of your ships! To play again, click 'New Game' in the upper right hand corner.")
            //     gameLogic.updateInfoPanel("danger")
            // } else {
            //     setGameState("player turn")
            // }
        } else if(gameState === "game over"){
            endGame()
        }
    }

    const updateMessage = (message) => {
        setMessage(message)
    }

    const updateGame = (agent,board,ships) => {
        if(agent === "player"){
            setPlayerBoard(board)
            setPlayerShips(ships)
        } else if(agent === "computer"){
            setCompBoard(board)
            setCompShips(ships)
        }
    }

    function endGame(){
        if(gameState !== "game over"){
            setGameState("game over")
        }
        const newGameBtn = document.querySelector(".newGameBtn")
        newGameBtn.classList.add("btn-inverse")
    }

    function runCompTurn(){
        const rand = Math.floor(Math.random() * Math.floor(2000))
        setTimeout(() => {
            const compTurnResult = compAI(playerBoard,playerShips,compLastTurn,updateCompLastTurn)
            let resultMessage
            if(compTurnResult === false){
                resultMessage = " missed! "
                gameLogic.updateInfoPanel()
            } else if(compTurnResult === true){
                resultMessage = " hit your ship! "
                gameLogic.updateInfoPanel("danger")
            }
            setMessage(compName + resultMessage + "Your turn.")
        },rand)

        if(gameLogic.checkIfAllShipsSunk(playerShips)){
            endGame()
            setMessage("Oh no! Your enemy has sunk all of your ships! To play again, click 'New Game' in the upper right hand corner.")
            gameLogic.updateInfoPanel("danger")
        } else {
            setGameState("player turn")
        }
    }

    return (
        <div>
            <Header 
                resetGame={props.resetGame}
            />
            <div className="playing-area">
                <InfoPanel 
                    message = {message}
                />
                <GameBoard
                    agent = "player"
                    board = {playerBoard}
                    ships = {playerShips}
                    gameState = {gameState}
                    updateGame = {updateGame}
                    updateGameState = {updateGameState}
                    updateMessage = {updateMessage}
                />
                <GameBoard
                    agent = "computer"
                    compName = {compName}
                    board = {compBoard}
                    ships = {compShips}
                    gameState = {gameState}
                    updateGame = {updateGame}
                    updateGameState = {updateGameState}
                    updateMessage = {updateMessage}
                />
            </div>
            <Footer />
        </div>
    )
}

export default PlayingArea