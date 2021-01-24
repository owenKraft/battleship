import shipFactory from './shipFactory'

const createShips = () => {
    const carrier = shipFactory("carrier",5)
    const battleship = shipFactory("battleship",4)
    const cruiser = shipFactory("cruiser",3)
    const submarine = shipFactory("submarine",3)
    const destroyer = shipFactory("destroyer",2)

    return {carrier,battleship,cruiser,submarine,destroyer}
}

export default createShips