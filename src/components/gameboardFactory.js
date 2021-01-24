const gameboardFactory = () => {
    const test = () => {
        console.log("this is a test",gameboard)
    }

    // creates array with 8 items(= i), then inserts another 8 item array in each item
    // const gameboard = [...new Array(8)].map(i => i = [...new Array(8)].map(i => i = 0))
    // const gameboard = [...new Array(8)].map(i => i = [...new Array(8)])
    const gameboard = [...new Array(8)].map(i => i = [...new Array(8)].map(i => i = ["empty"]))
    console.log(gameboard)

    function placeShip(shipObj,startCoord,orientation){
        const name = shipObj.name
        const length = shipObj.length
        let xCoord = startCoord[0]
        let yCoord = startCoord[1]
        let shipIndex = 0
        let updatedCellsArr = []

        const validShipPlacement = checkForValidShipPlacement(xCoord,yCoord,length,orientation)

        if(validShipPlacement.validPlacement !== false){
            if(orientation === "vertical"){
                for(let y = yCoord; y < yCoord + length; y++){
                    // gameboard[xCoord][y] = [0,name,shipIndex]
                    gameboard[xCoord][y] = ["ship",name,shipIndex]
                    updatedCellsArr.push([xCoord,y])
                    shipIndex++
                }
            } else if (orientation === "horizontal"){
                for(let x = xCoord; x < xCoord + length; x++){
                    // gameboard[x][yCoord] = [0,name,shipIndex]
                    gameboard[x][yCoord] = ["ship",name,shipIndex]
                    updatedCellsArr.push([x,yCoord])
                    shipIndex++
                }
            }
        }

        return updatedCellsArr
    }

    function checkForValidShipPlacement(xCoord,yCoord,shipLength,orientation){
        let validPlacement
        let message

        if(orientation === "vertical"){
            if(yCoord + shipLength > gameboard[0].length){
                validPlacement = false
                message = "invalid placement! ship length extends past gameboard"
            } else {
                for(let y = yCoord; y < yCoord + shipLength; y++){
                    // if(typeof gameboard[xCoord][y] !== "undefined"){
                    if(gameboard[xCoord][y][0] !== "empty"){
                        validPlacement = false
                        message = "invalid placement! one or more coordinates already occupied"
                    }
                }
            }
        } else if (orientation === "horizontal"){
            if(xCoord + shipLength > gameboard.length){
                validPlacement = false
                message = "invalid placement! ship length extends past gameboard"
            } else {
                for(let x = xCoord; x < xCoord + shipLength; x++){
                    // if(typeof gameboard[x][yCoord] !== "undefined"){
                    if(gameboard[x][yCoord][0] !== "empty"){
                        validPlacement = false
                        message = "invalid placement! one or more coordinates already occupied"
                    }
                }
            }
        } else {
            validPlacement = false
            message = "invalid orientation! orientation must be either 'horizontal' or 'vertical'"
        }

        return {validPlacement,message}
    }

    // function checkHit(x,y){
    //     const row = gameboard[x]

    //     if(typeof row[y] == "undefined" || row[y][0] === 2){
    //         row[y][0] = 2
    //         return [false,"miss"]
    //     } else if(row[y][0] === 1){
    //         return [true,"already hit",row[y][1],row[y][2]]
    //     } else if (row[y][0] === 0){
    //         row[y][0] = 1
    //         return [true,"hit",row[y][1],row[y][2]]
    //     }
    // }

    function checkHit(x,y){
        const row = gameboard[x]

        // if(typeof row[y][0] == "undefined" || row[y] === "miss"){
        if(row[y][0] !== "empty" && row[y][0] !== "ship"){
            return ["already clicked"]
        } else if(row[y][0] === "empty") {
        // if(row[y][0] === "empty" || row[y][0] === "miss"){
            row[y][0] = "miss"
            return [false,"miss"]
        // } else if(row[y][0] === "hit"){
            // return [true,"already hit",row[y][1],row[y][2]]
        // } else if (row[y][0] === 0){
        } else if (row[y][0] === "ship"){
            row[y][0] = "hit"
            return [true,"hit",row[y][1],row[y][2]]
        }
    }

    return {test, gameboard, checkForValidShipPlacement, placeShip, checkHit}
}

export default gameboardFactory