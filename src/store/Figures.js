 
class Figures {
    constructor(player, value, style) {
        this.player = player
        this.value = value
        this.style = style
    }
} 



export class King extends Figures{
    constructor(player, value, style) {
        super(player, value, style) 
    }
    validation(currentCell, cellsNumbers, value) {
        let validCells;
        let col = Math.floor(currentCell % 8)
        switch (col) {
            case 0: validCells = [currentCell + 1,
            currentCell - 8, currentCell + 8,
            currentCell - 7, currentCell + 9]
                break;
            
            case 7: validCells = [currentCell - 1,
            currentCell - 8, currentCell + 8,
            currentCell + 7, currentCell - 9]
                break;
                
            default: validCells = [currentCell + 1, currentCell - 1,
            currentCell - 8, currentCell + 8,
            currentCell - 7, currentCell + 7,
            currentCell - 9, currentCell + 9
            ]
                break;
                
        }
        return checkValidCells(validCells).filter((cell) => cellsNumbers[cell].player != value.player) 
    }
}


export class Queen extends Figures{
    constructor(player, value, style) {
        super(player, value, style) 
    }
    validation(currentCell, cellsNumbers, value) {
        let row = Math.floor((currentCell) / 8)
        let col = Math.floor(currentCell % 8)
        let validCells = []
        
        //BISHOP
        for (var i = currentCell + 7; i < 64; i += 7) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
            if(i % 8 == 0 || (i + 1)% 8 == 0) break
        }
        for (var i = currentCell - 7; i >= 0; i -= 7) {
            if(cellsNumbers[i].player == value.player ) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
            if(i % 8 == 0 || (i + 1)% 8 == 0 ) break
            
        }
        for (var i = currentCell + 9; i < 64; i += 9) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break

            if (i % 8 == 0 || (i + 1) % 8 == 0) break
            
        }
        for (var i = currentCell - 9; i >= 0; i -= 9) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
            if (i % 8 == 0 || (i + 1) % 8 == 0) break
        }
        //ROOK
        //move right / left
        for (let i = currentCell + 1; i < (row + 1) * 8; i++) { 
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }

        for (let i = currentCell - 1; i >= row * 8; i--) {
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }

        //move up / down 
        for (let i = currentCell + 8; i < 64; i += 8) {
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }

        for (let i = currentCell - 8; i >= 0; i -= 8) {
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }
        return checkValidCells(validCells).filter((cell) => cellsNumbers[cell].player != value.player) 
    }
}

export class Rook extends Figures{
    constructor(player, value, style) {
        super(player, value, style) 
    }
    validation(currentCell, cellsNumbers, value) {
        let row = Math.floor((currentCell) / 8)
        let col = Math.floor(currentCell % 8)
        let validCells = []
        //move right / left
        for (let i = currentCell + 1; i < (row + 1) * 8; i++) { 
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }

        for (let i = currentCell - 1; i >= row * 8; i--) {
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }

        //move up / down 
        for (let i = currentCell + 8; i < 64; i += 8) {
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }

        for (let i = currentCell - 8; i >= 0; i -= 8) {
            if (cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
        }
        
        return checkValidCells(validCells) 
    }
}
let checkValidCells = (validCells) => {
    return validCells.filter((cell) => cell >= 0 && cell < 64)
}
export class Bishop extends Figures{
    constructor(player, value, style) {
        super(player, value, style) 
    }
    validation(currentCell, cellsNumbers, value) {
        let validCells = []
        for (var i = currentCell + 7; i < 64; i += 7) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
            if(i % 8 == 0 || (i + 1)% 8 == 0) break
        }
        for (var i = currentCell - 7; i >= 0; i -= 7) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
            if(i % 8 == 0 || (i + 1)% 8 == 0 ) break
            
        }
        for (var i = currentCell + 9; i < 64; i += 9) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break

            if (i % 8 == 0 || (i + 1) % 8 == 0) break
            
        }
        for (var i = currentCell - 9; i >= 0; i -= 9) {
            if(cellsNumbers[i].player == value.player) break
            validCells.push(i)
            if(cellsNumbers[i].player != 0) break
            if (i % 8 == 0 || (i + 1) % 8 == 0) break
        }
        return checkValidCells(validCells).filter((cell) => cellsNumbers[cell].player != value.player) 
    }
    
}


export class Knight extends Figures{
    constructor(player, value, style) {
        super(player, value, style) 
    }
    validation(currentCell, cellsNumbers, value) {
        let validCells = []
        let col = Math.floor(currentCell % 8)
        switch (col) {
            case 0: validCells = [currentCell - 6,
            currentCell + 10, currentCell - 15, currentCell + 17];
                break;
            
            case 1: validCells = [currentCell - 6, currentCell + 10,
            currentCell + 15, currentCell - 15,
            currentCell + 17, currentCell - 17]
                break;
            
            case 6: validCells = [currentCell + 6, currentCell - 10,
            currentCell + 15, currentCell - 15,
            currentCell + 17, currentCell - 17]
                break;

            case 7: validCells = [currentCell + 6, currentCell - 10,
            currentCell + 15, currentCell - 17]
                break;

            default: validCells = [currentCell + 6, currentCell - 6,
            currentCell + 10, currentCell - 10,
            currentCell + 15, currentCell - 15,
            currentCell + 17, currentCell - 17]
                break;
        }
        return checkValidCells(validCells).filter((cell) => cellsNumbers[cell].player != value.player) 
    }
    
}
let checkIsOccupied = (validCells, cellsNumber, value) => {
    
}

export class Pawn extends Figures{
    constructor(player, value, style, firstMove) {
        super(player, value, style)
        this.firstMove = firstMove
    }
    validation(currentCell, cellsNumber, value) {
        let validCells = []
        if (value.player == 2) {
            if (cellsNumber[currentCell + 8].player == 0) {
                validCells.push(currentCell + 8);
                if (cellsNumber[currentCell + 16].player == 0 && value.firstMove) {
                    validCells.push(currentCell + 16);
                }
            }
            if (cellsNumber[currentCell + 7].player == 1) {
                validCells.push(currentCell + 7);
            }
            if (cellsNumber[currentCell + 9].player == 1) {
                validCells.push(currentCell + 9);
            }
        } else {
            if (cellsNumber[currentCell - 8].player == 0) {
                validCells.push(currentCell - 8);
                if (cellsNumber[currentCell - 16].player == 0 && value.firstMove) {
                    validCells.push(currentCell - 16);
                }
            }
            if (cellsNumber[currentCell - 7].player == 2) {
                validCells.push(currentCell - 7);
            }
            if (cellsNumber[currentCell - 9].player == 2) {
                validCells.push(currentCell - 9);
            }
        }
        return checkValidCells(validCells) 
    }
}

export class FreeCell extends Figures{
    constructor(player, value, style) {
        super(player, value, style) 
    }
    validation() {
        console.log("valid")
    }
}



/*
Figures.King.conditions = (currentCell, chosenCell) => {
    currentCell + 1 == chosenCell ||
    currentCell - 1 == chosenCell ||
    currentCell + 8 == chosenCell ||
    currentCell - 8 == chosenCell ||
    currentCell + 1 == chosenCell ||
    currentCell + 7 == chosenCell ||
    currentCell - 7 == chosenCell ||
    currentCell + 9 == chosenCell ||
    currentCell - 9 == chosenCell 
}

Figures.Queen.conditions = (currentCell, chosenCell) => {

    currentCell + 1 == chosenCell ||
    currentCell - 1 == chosenCell ||
    currentCell + 8 == chosenCell ||
    currentCell - 8 == chosenCell ||
    currentCell + 1 == chosenCell ||
    currentCell + 7 == chosenCell ||
    currentCell - 7 == chosenCell ||
    currentCell + 9 == chosenCell ||
    currentCell - 9 == chosenCell 
}

Figures.Bishop.conditions = (currentCell, chosenCell) => {
    
    currentCell + 1 == chosenCell ||
    currentCell - 1 == chosenCell ||
    currentCell + 8 == chosenCell ||
    currentCell - 8 == chosenCell ||
    currentCell + 1 == chosenCell ||
    currentCell + 7 == chosenCell ||
    currentCell - 7 == chosenCell ||
    currentCell + 9 == chosenCell ||
    currentCell - 9 == chosenCell 
}

Figures.Knight.conditions = (currentCell, chosenCell) => {
    
    currentCell + 1 == chosenCell ||
    currentCell - 1 == chosenCell ||
    currentCell + 8 == chosenCell ||
    currentCell - 8 == chosenCell ||
    currentCell + 1 == chosenCell ||
    currentCell + 7 == chosenCell ||
    currentCell - 7 == chosenCell ||
    currentCell + 9 == chosenCell ||
    currentCell - 9 == chosenCell 
}

Figures.Rook.conditions = (currentCell, chosenCell) => {
    
    currentCell + 1 == chosenCell ||
    currentCell - 1 == chosenCell ||
    currentCell + 8 == chosenCell ||
    currentCell - 8 == chosenCell ||
    currentCell + 1 == chosenCell ||
    currentCell + 7 == chosenCell ||
    currentCell - 7 == chosenCell ||
    currentCell + 9 == chosenCell ||
    currentCell - 9 == chosenCell 
}

Figures.Pawn.conditions = (currentCell, chosenCell, isMoveOfWhite, isChosenCellEnemy) => {
    let isCorrectMove = { move: false, break: false }
    
    currentCell + 8 == chosenCell && isMoveOfWhite ||
        currentCell + 16 == chosenCell && currentCell + 8 == chosenCell && isMoveOfWhite && currentCell >= 9 && currentCell <= 16 ||
    
        currentCell - 8 == chosenCell && !isMoveOfWhite ||
        currentCell - 16 == chosenCell && currentCell - 8 == chosenCel && !isMoveOfWhite && currentCell >= 49 && currentCell <= 56 ?
        isCorrectMove = { move: true, break: false } : isCorrectMove = { move: false, break: false };

    (currentCell + 7 == chosenCell || currentCell + 9 == chosenCell) && isMoveOfWhite && isChosenCellEnemy ? isCorrectMove = {move: true, break: true} : isCorrectMove

    (currentCell - 7 == chosenCell || currentCell - 9 == chosenCell) && !isMoveOfWhite && isChosenCellEnemy ? isCorrectMove = {move: true, break: true} : isCorrectMove

    return isCorrectMove

}
*/


