// import React, {useState, useEffect} from 'react'
// import gameboardFactory from './gameboardFactory'
import shipFactory from './shipFactory'
import admirals from './admirals.js'

const GameLogic = (props) => {

    function getAdmiral(){
        const randNum = Math.floor(Math.random() * Math.floor(admirals.length))
        return admirals[randNum].admiral
    }

    function displayShipPreview(startCoord,shipObj,orientation,board){
        const shipLength = shipObj.length
        const gameboard = board.gameboard
        let xCoord = startCoord.x
        let yCoord = startCoord.y
        const messageDefault = "Click a cell to place ship"
        let message = messageDefault

        const validShipPlacement = board.checkForValidShipPlacement(xCoord,yCoord,shipLength,orientation)

        if(validShipPlacement.validPlacement !== false){
            if(orientation === "vertical"){
                for(let y = yCoord; y < yCoord + shipLength; y++){
                    message = messageDefault
                    const cell = getCell(xCoord,y)
                    cell.classList.add("placeShip")
                }
            } else if (orientation === "horizontal"){
                for(let x = xCoord; x < xCoord + shipLength; x++){
                    message = messageDefault
                    const cell = getCell(x,yCoord)
                    cell.classList.add("placeShip")
                }
            }
        } else if(validShipPlacement.validPlacement === false){
            console.log(validShipPlacement.message)
            if(orientation === "vertical"){
                if(yCoord + shipLength > gameboard[0].length){
                    for(let y = yCoord; y < gameboard[0].length; y++){
                        message = "invalid placement! ship length extends past gameboard"
                        const cell = getCell(xCoord,y)
                        cell.classList.add("placeShip-invalid")
                    }
                } else {
                    for(let y = yCoord; y < yCoord + shipLength; y++){
                        message = "invalid placement! one or more coordinates already occupied"
                        const cell = getCell(xCoord,y)
                        cell.classList.add("placeShip-invalid")
                    }
                }
            } else if(orientation === "horizontal"){
                if(xCoord + shipLength > gameboard[0].length){
                    for(let x = xCoord; x < gameboard[0].length; x++){
                        message = messageDefault
                        const cell = getCell(x,yCoord)
                        cell.classList.add("placeShip-invalid")
                    }
                } else {
                    for(let x = xCoord; x < xCoord + shipLength; x++){
                        message = "invalid placement! one or more coordinates already occupied"
                        const cell = getCell(x,yCoord)
                        cell.classList.add("placeShip-invalid")
                    }
                }
            }
        } else {
            message = "invalid orientation! orientation must be either 'horizontal' or 'vertical'"
        }

        console.log(message)
        return message
    }

    function displayPlayerShip(array){
        array.forEach(i => {
                const cell = getCell(i[0],i[1])
                cell.classList.add("playerShip")
            }
        )
    }

    function clickCompCell(cell,board,ships){
        const coordinates = getCoordinates(cell)
        const checkForHit = board.checkHit(coordinates.x,coordinates.y)
        const result = displayCellClickResult(coordinates.cell,checkForHit,ships)
        
        return result
    }

    function removeShipFromSelector(shipName,selector){
        let shipArr = []
        for (let i=0; i < selector.options.length; i++){
            shipArr[i] = selector.options[i].value
        }

        const shipIndex = shipArr.findIndex(i => i === shipName)
        selector.remove(shipIndex)

        if(selector.options.length === 0){
            document.querySelector(".ship-selector").classList.add("hidden")
        }
    }

    function getCoordinates(e){
        const cell = e.target.closest(".cell")
        const x = Number(cell.attributes[1].value)
        const y = Number(cell.attributes[2].value)

        console.log("getCoordinates",x,y)

        return {cell,x,y}
    }

    function getCell(x,y){
        const xCoord = document.querySelectorAll(`[data-agent="player"][data-row="${x}"]`)
        const cell = xCoord[y]
        return cell
    }

    function displayCellClickResult(e,responseObj,ships){
        const cell = e.firstElementChild
        const result = responseObj[0]
        const shipName = responseObj[2]
        const hitIndex = responseObj[3]

        if(result === false){
            cell.querySelector(".miss-icon").classList.remove("hidden")
            cell.parentElement.classList.add("miss")
        } else if (result === true){
            cell.querySelector(".hit-icon").classList.remove("hidden")
            cell.parentElement.classList.add("hit")
            const ship = ships[shipName]
            ship.hit(hitIndex)
            console.log("ship sunk?", ship.sunk)
        }
        
        return result
    }

    function createShips(){
        const carrier = shipFactory("carrier",5)
        const battleship = shipFactory("battleship",4)
        const cruiser = shipFactory("cruiser",3)
        const submarine = shipFactory("submarine",3)
        const destroyer = shipFactory("destroyer",2)

        return {carrier,battleship,cruiser,submarine,destroyer}
    }

    function checkIfAllShipsSunk(ships){
        const shipsArr = Object.getOwnPropertyNames(ships)
        let sunkStatusArr = []

        shipsArr.forEach(ship => {
            sunkStatusArr.push(ships[ship].sunk)
        })

        const filteredArr = sunkStatusArr.filter(status => status === true)

        if(filteredArr.length === shipsArr.length){
            return true
        } else {
            return false
        }
    }

    function updateInfoPanel(status){
        const infoPanel = document.querySelector(".info-panel")
        infoPanelCleanUp()

        if(status === "success"){
            infoPanel.classList.add("info-panel-success")
        } else if(status === "warning"){
            infoPanel.classList.add("info-panel-warning")
        } else if(status === "danger"){
            infoPanel.classList.add("info-panel-danger")
        }

        function infoPanelCleanUp(){
            infoPanel.classList.remove("info-panel-success")
            infoPanel.classList.remove("info-panel-warning")
            infoPanel.classList.remove("info-panel-danger")
        }
    }

    return {
        getAdmiral,
        displayShipPreview,
        displayPlayerShip,
        clickCompCell,
        removeShipFromSelector,
        createShips,
        getCoordinates,
        getCell,
        checkIfAllShipsSunk,
        displayCellClickResult,
        updateInfoPanel
    }
}

export default GameLogic