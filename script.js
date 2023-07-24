//carrier: 5
//battleship: 4
//cruiser: 3
//submarine: 3
//destroyer: 2

const shipFactory = (shipName) => {
    let length
    switch (shipName) {
        case 'carrier':
            length = 5
            break
        case 'battleship':
            length = 4
            break
        case 'cruiser':
            length = 3
            break
        case 'submarine':
            length = 3
            break
        case 'destroyer':
            length = 2
    }

    const shipHitsArray = []

    const shipHit = () => {
        shipHitsArray.push("x")
        sunkCheck()
    }

    let shipSunk
    const sunkCheck = () => {
        if (shipHitsArray.length === length) {
            shipSunk = true
        } else {
            shipSunk = false
        }
        return {shipSunk}
    }

    return {shipName, length, shipHit, shipHitsArray, shipSunk}
}

export {shipFactory}