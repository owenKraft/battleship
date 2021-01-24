const ShipSelector = () => {
    return (
        <div className="ship-selector">
          <h3 className="ship-selector-text">Change ship or orientation</h3>
          <div>
            <select id="ship-dropdown">
              <option value="carrier">Carrier</option>
              <option value="battleship">Battleship</option>
              <option value="cruiser">Cruiser</option>
              <option value="submarine">Submarine</option>
              <option value="destroyer">Destroyer</option>
            </select>
            <select id="orientation-dropdown">
              <option value="vertical">Vertical</option>
              <option value="horizontal">Horizontal</option>
            </select>
          </div>
        </div>
    )
}

export default ShipSelector