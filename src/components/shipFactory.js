const shipFactory = (shipName, shipLength) => {
    const name = shipName
    const length = shipLength
    let sunk = false
    let hitArray = createHitArray(length)

    function checkNumOfHits(){
        return hitArray.reduce((accumulator,currentValue) => accumulator + currentValue,0)
    }

    function resetShip(){
        this.sunk = false
        this.hitArray = createHitArray(length)
    }

    function hit(index){
        hitArray[index] = 1

        if(checkNumOfHits() === hitArray.length && this.sunk === false){
            this.sunk = true
        }
    }
    
    function createHitArray(length) {
        return [...new Array(length)].map(i => i = 0)
    }

    return {name, length, sunk, hitArray, resetShip, hit, checkNumOfHits}
}

export default shipFactory