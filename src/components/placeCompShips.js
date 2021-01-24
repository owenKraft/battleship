const placeCompShips = (board,ships) => {
    // place carrier
    board.placeShip(ships.carrier,[1,1],"horizontal")
    //place battleship
    board.placeShip(ships.battleship,[6,3],"vertical")
    //place cruiser
    board.placeShip(ships.cruiser,[2,3],"horizontal")
    // place submarine
    board.placeShip(ships.submarine,[1,5],"vertical")
    // place destroyer
    board.placeShip(ships.destroyer,[6,0],"horizontal")
}

export default placeCompShips