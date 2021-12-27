import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './chessApp.css'
import { FreeCell, King } from './store/Figures';
import { getNewPosition, state as stateGlobal } from './store/state';

//let positions = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812', '&#9815;', '&#9816;', '&#9814;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']


let clickState = {
    isSelect: false,
    isMove: false,
    row: undefined,
    cell: undefined,
    cellContent: '',
    lightedCells: [],
}



let gameScore = {
    player1: [],
    player2: [],
    isStart: true,
    isMoveOfPlayer1: true
}

let ourId, enemyId;

const ChessBoard = ({ state, socket}) => {
    const dispatch = useDispatch()
    const [info, setInfo] = useState(state.currentPosition)
    socket.on("startGame", ({ inGameWith, turn }) => {
        //when someone else accept our game
        enemyId = inGameWith;
        //time to init board
        console.log('your turn')
    });
    socket.on("turn", (data) => {
        //our turn
        console.log('я походил')
        //setEnemyData(data ? data.currentposition : "your turn");
    });

    let change = (e, row, cell, value, obj) => {
        if ((gameScore.isMoveOfPlayer1 && value.player == 2 || !gameScore.isMoveOfPlayer1 && value.player == 1) && !clickState.isSelect ) return false 
        console.log("row: ", row, "cell: ", cell, "value: ", value)
        
        let newState = [...info];
        window.arr = getNewPosition()
        let cellsNumbers = getNewPosition()
        if (gameScore.isStart) {
            gameScore.player1 = cellsNumbers.filter((cell) => cell.player == 1)
            gameScore.player2 = cellsNumbers.filter((cell) => cell.player == 2)
            console.log(gameScore)
        }
        let currentCell = cellsNumbers.indexOf(value)
        console.log(currentCell)
        

        if (!clickState.isSelect) {
            if (value instanceof FreeCell) return false
            clickState.cellContent = newState[row][cell]
            clickState.row = row;
            clickState.cell = cell;
            console.log(clickState)
            clickState.isSelect = true
            
            clickState.lightedCells = value.validation(currentCell, cellsNumbers, value)
            clickState.lightedCells.map((cell) => cellsNumbers[cell].style = "current-cell")

        } else {   
            clickState.potentionalMoves = clickState.cellContent.validation(currentCell, cellsNumbers, clickState.cellContent)
            clickState.kingCell = clickState.potentionalMoves?.filter((figure) => cellsNumbers[figure] instanceof King)
            if (clickState.kingCell.length != 0) {
                let kingMoves = cellsNumbers[clickState.kingCell[0]].validation(clickState.kingCell[0], cellsNumbers, cellsNumbers[clickState.kingCell])
                kingMoves = kingMoves.filter((move) => clickState.potentionalMoves.filter((potentionalMove) => potentionalMove != move))
                console.log("kingMoves: ", kingMoves)
            }
            clickState.lightedCells.map((cell) => cellsNumbers[cell].style = "allChessCells")
            
            if (clickState.lightedCells.some((cell) => cell == currentCell)) {
                if (clickState.cellContent.firstMove) {
                    clickState.cellContent.firstMove = false;
                }
                newState[clickState.row][clickState.cell] = new FreeCell(0, undefined, "allChessCells")
                if (gameScore.isMoveOfPlayer1) {
                    gameScore.player2 = gameScore.player2.filter((figure) => figure != newState[row][cell])
                } else {
                    gameScore.player1 = gameScore.player1.filter((figure) => figure != newState[row][cell])
                }
                newState[row][cell] = clickState.cellContent
                gameScore.isMoveOfPlayer1 = !gameScore.isMoveOfPlayer1
            }


            window.newState = newState
            window.gameScore = gameScore

           
            socket.emit("turn", { data: newState });
            
                
            socket.on("turn", (data) => {
                //our turn
                newState =  data.newState

              });
            
            clickState.isSelect = false
            clickState.cellContent.style = "allChessCells"
            console.log(clickState)
            gameScore.isStart = false


            
        }
        
        console.log("newState, ", newState)
        setInfo(newState)
        console.log(gameScore)
    }
   
    return (
        <div className="chess">    
            <table>
                <tbody>
                    {info.map((a, row) =>
                        React.createElement("tr", row % 2 == 0 ? { key: row, className: 'odd-td' } : { className: 'even-td' }, a.map((value, cell, obj) =>
                            React.createElement("td", {key: cell,
                                dangerouslySetInnerHTML: { __html: value?.value || undefined }, className: value?.style, onClick: (e) => change(e, row, cell, value
                                , obj)
                            })
                        ))
                    )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ChessBoard;
