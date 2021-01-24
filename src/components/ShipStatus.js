import React from 'react'


const ShipStatus = (props) => {
        const ships = props.ships

        return (
            <div>
                <ul>
                    <li>{ships.carrier.name}: {ships.carrier.sunk.toString()}</li>
                    <li>{ships.battleship.name}: {ships.battleship.sunk.toString()}</li>
                    <li>{ships.cruiser.name}: {ships.cruiser.sunk.toString()}</li>
                    <li>{ships.submarine.name}: {ships.submarine.sunk.toString()}</li>
                    <li>{ships.destroyer.name}: {ships.destroyer.sunk.toString()}</li>
                </ul>
            </div>
        )
}

export default ShipStatus