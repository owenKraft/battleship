
import GameLogic from './GameLogic'

const compAI = (playerBoard,playerShips,lastTurn,updateLastTurn) => {
    const turn = lastTurn
    const mode = turn.mode
    console.log(mode)

    const gameboard = playerBoard.gameboard
    const gameLogic = GameLogic()
    const directionArray = ["up","down","left","right"]
    const rand = (max) => {return Math.floor(Math.random() * Math.floor(max))}
    let x
    let y
    let orientation
    let direction 
    
    if(mode === "random"){
        x = rand(gameboard.length)
        y = rand(gameboard[x].length)
    
        while(gameboard[x][y][0] === "miss" || gameboard[x][y][0] === "hit"){
            x = rand(gameboard.length)
            y = rand(gameboard[x].length)
        }
    } else if(mode === "seeking"){
        if(turn.lastResult === "init"){
            setRandDirection()
        } else {
            orientation = turn.orientation
            direction = turn.direction
        }
    }

    const cell = gameLogic.getCell(x,y)
    const checkForHit = playerBoard.checkHit(x,y)
    const clickResult = gameLogic.displayCellClickResult(cell,checkForHit,playerShips)
    
    if(checkForHit[0]){
        if(turn.hasOwnProperty("lastResult")){
            turn.lastResult = "init"
            console.log(turn.lastResult)
        } else {
            turn.lastResult = checkForHit[0].toString()
            console.log(turn.lastResult)
        }
    } else {
        turn.lastResult = checkForHit[0].toString()
        console.log(turn.lastResult)
    }

    function setRandDirection(){
        direction = directionArray[rand(3)]
        if(direction === "up" || direction === "down"){
            orientation = "vertical"
        } else if(direction === "left" || direction === "right"){
            orientation = "horizontal"
        }
    }

    return clickResult
}

export default compAI