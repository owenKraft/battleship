
import GameLogic from './GameLogic'

const compAI = (playerBoard,playerShips,lastTurn,updateLastTurn) => {
    const turn = lastTurn
    const mode = turn.mode
    console.log(mode)

    const gameboard = playerBoard.gameboard
    const gameLogic = GameLogic()
    const directionArray = ["up","down","left","right"]
    const rand = (max) => {return Math.floor(Math.random() * Math.floor(max))}
    const coords = getCoords(mode,turn)
    const x = coords.x
    const y = coords.y
    const direction = coords.direction

    const cell = gameLogic.getCell(x,y)
    const checkForHit = playerBoard.checkHit(x,y)
    const clickResult = gameLogic.displayCellClickResult(cell,checkForHit,playerShips)

    updateLastTurn(updateTurn(turn))
    
    function getCoords(mode,turn){
        let x
        let y
        let direction

        if(mode === "random"){
            x = rand(gameboard.length)
            y = rand(gameboard[x].length)
            
            while(gameboard[x][y][0] === "miss" || gameboard[x][y][0] === "hit"){
                x = rand(gameboard.length)
                y = rand(gameboard[x].length)
            }
        } else if(mode === "hit"){
            if(turn.direction === null){
                do {
                    direction = setDirection(turn.resultsArray[0].coords).direction
                    let newCoords = updateCoords(turn.resultsArray[0].coords,direction)
                    x = newCoords.x
                    y = newCoords.y
                } while(!checkForValidMove([x,y]))
            } else if(turn.resultsArray[turn.resultsArray.length-1].result === "hit"){
                direction = turn.direction
                let newCoords = updateCoords(turn.resultsArray[turn.resultsArray.length-1].coords,direction)
                x = newCoords.x
                y = newCoords.y

                if(!checkForValidMove([x,y])){
                    direction = flipDirection(turn.direction)
                    newCoords = updateCoords(turn.resultsArray[0].coords,direction)
                    x = newCoords.x
                    y = newCoords.y

                    if(!checkForValidMove([x,y])){
                        direction = null
                        x = rand(gameboard.length)
                        y = rand(gameboard[x].length)
                        
                        while(gameboard[x][y][0] === "miss" || gameboard[x][y][0] === "hit"){
                            x = rand(gameboard.length)
                            y = rand(gameboard[x].length)
                        }
                    }
                }
            } else if(turn.resultsArray[turn.resultsArray.length-1].result === "miss"){
                let newCoords

                const numOfHits = turn.resultsArray.filter(i => i.result === "hit")
                if(numOfHits.length === 1 && turn.resultsArray.length < 5){
                    do {
                        direction = setDirection([x,y])
                        newCoords = updateCoords(turn.resultsArray[0].coords,direction)
                        x = newCoords.x
                        y = newCoords.y
                    } while(!checkForValidMove([x,y]))
                } else {
                    direction = flipDirection(turn.direction)
                    newCoords = updateCoords(turn.resultsArray[0].coords,direction)
                    x = newCoords.x
                    y = newCoords.y

                    if(!checkForValidMove([x,y])){
                        direction = null
                        x = rand(gameboard.length)
                        y = rand(gameboard[x].length)
                        
                        while(gameboard[x][y][0] === "miss" || gameboard[x][y][0] === "hit"){
                            x = rand(gameboard.length)
                            y = rand(gameboard[x].length)
                        }
                    }
                }
            }
        }

        return {x,y,direction}
    }

    function updateCoords(coords,dir){
        let x = coords[0]
        let y = coords[1]

        if(dir === "up"){
            y = y - 1
        } else if(dir === "down"){
            y = y + 1
        } else if(dir === "left"){
            x = x - 1
        } else if(dir === "right"){
            x = x + 1
        }

        return {x,y}
    }

    function updateTurn(lastTurn){
        let turn = lastTurn

        console.log("clickResult = ",clickResult)
        // checks to see if check for hit returns true, indicating actual hit
        if(clickResult){
            // checks to see if there was a last result, or if this is init hit in sequence
            if(turn.resultsArray === null){
                turn.resultsArray = [{
                    result: "hit",
                    coords: [x,y]
                }]
                turn.mode = "hit"
            } else {
                turn.resultsArray.push({
                    result: "hit",
                    coords: [x,y]
                })
                turn.direction = direction
                if(turn.direction === null){
                    turn.mode = "random"
                }
            }
        // what to do if hits returns as false, aka a miss
        } else {
            if(turn.resultsArray !== null){
                const numOfMisses = turn.resultsArray.filter(i => i.result === "miss")
                const numOfHits = turn.resultsArray.filter(i => i.result === "hit")
                if(numOfMisses.length >= 2 && numOfHits.length > 1){
                    turn.mode = "random"
                    turn.resultsArray = null
                    turn.direction = null
                } else {
                    turn.resultsArray.push({
                        result: "miss",
                        coords: [x,y]
                    })
                }
            }
        }

        console.log(turn)
        return turn
    }

    function setDirection(coords){
        let direction

        if(coords === [0,0] || coords === [0,7] || coords === [7,0] || coords === [7,7]){
            direction = handleCorners(coords)
        } else if (coords[0] === 0 || coords[0] === 7 || coords[1] === 0 || coords[1] === 7){
            direction = handleEdges(coords)
        } else {
            direction = directionArray[rand(4)]
        }

        return {direction}
    }

    function flipDirection(direction){
        const dir = direction

        if(dir === "up"){
            return "down"
        } else if(dir === "down"){
            return "up"
        } else if(dir === "left"){
            return "right"
        } else if(dir === "right"){
            return "left"
        }
    }

    function checkForValidMove(coords){
        let x = coords[0]
        let y = coords[1]

        if(gameboard[x][y][0] === "miss" || gameboard[x][y][0] === "hit"){
            return false
        } else if(x >= gameboard.length || y >= gameboard[x].length || x < 0 || y < 0 ){
            return false
        } else {
            return true
        }
    }

    function handleCorners(coords){
        let dir

        if(coords === [0,0]){
            dir = Math.random() >= 0.5 ? "right" : "down";
        } else if (coords === [7,7]){
            dir = Math.random() >= 0.5 ? "left" : "up";
        } else if (coords === [7,0]){
            dir = Math.random() >= 0.5 ? "left" : "down";
        } else if (coords === [7,7]){
            dir = Math.random() >= 0.5 ? "right" : "up";
        }

        return dir
    }

    function handleEdges(coords){
        const x = coords[0]
        const y = coords[1]
        let dir

        if(x === 0){
            dir = ["up","down","right"][rand(2)]
        } else if(x === 7){
            dir = ["up","down","left"][rand(2)]
        } else if(y === 0){
            dir = ["left","right","down"][rand(2)]
        } else if(y === 7){
            dir = ["left","right","up"][rand(2)]
        }

        return dir
    }

    return clickResult
}

export default compAI