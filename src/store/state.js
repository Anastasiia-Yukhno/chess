import {King, Queen, Rook, Bishop, Knight, Pawn, Figures, FreeCell} from "./Figures"
export let state = {
    string: "sdg",
    initialPosition: [
        ['&#9814;', '&#9816;', '&#9815;',  '&#9813;', '&#9812','&#9815;', '&#9816;', '&#9814'],
        ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'],
        [undefined, undefined, undefined, undefined, undefined, undefined,undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined,undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined,undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined,undefined, undefined],
        ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
        ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']
    ],
    currentPosition: [
        [new Rook(2, '&#9814;', "allChessCells"), new Knight(2, '&#9816;', "allChessCells"), new Bishop(2, '&#9815;', "allChessCells"),  new Queen(2, '&#9813', "allChessCells"), new King(2, '&#9812;', "allChessCells"), new Bishop(2, '&#9815', "allChessCells"), new Knight(2, '&#9816;', "allChessCells"), new Rook(2, '&#9814;', "allChessCells")],
        
        [new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true), new Pawn(2, '&#9817;', "allChessCells", true)],
        
        [new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells")
        ],

        [new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells")
        ],

        [new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells")
        ],

        [new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells"), new FreeCell(0, undefined, "allChessCells")
        ],

        [new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true), new Pawn(1, '&#9823;', "allChessCells", true)],
        
        [new Rook(1, '&#9820;', "allChessCells"), new Knight(1, '&#9822;', "allChessCells"), new Bishop(1, '&#9821;', "allChessCells"), new Queen(1, '&#9819;', "allChessCells"), new King(1,'&#9818;', "allChessCells"), new Bishop(1, '&#9821;', "allChessCells"),  new Knight(1, '&#9822;', "allChessCells"), new Rook(1, '&#9820;', "allChessCells")]
    ],
    isLogin: false,
    isNewGame: true,
    nickName: 'Admin',
    inGameWith:  undefined,
    currentPositionArray: undefined,
    citate: "i'm tired",
    style: "td-class"
}
 
export let getNewPosition = () => state.currentPosition.flat();
console.log("state ", state)
console.log("getNewPosition ", getNewPosition())



/* [figure.Rook.displayWhite, figure.Knight.displayWhite, figure.Bishop.displayWhite,  figure.King.displayWhite, figure.Queen.displayWhite,figure.Bishop.displayWhite, figure.Knight.displayWhite, figure.Rook.displayWhite],
        [first, figure.Knight.displayWhite, figure.Bishop.displayWhite, figure.King.displayWhite, figure.Queen.displayWhite, figure.Bishop.displayWhite, figure.Knight.displayWhite, figure.Rook.displayWhite],
*/

/* [figure.Rook.displayWhite(), figure.Knight.displayWhite(), figure.Bishop.displayWhite(), figure.King.displayWhite(), figure.Queen.displayWhite(), figure.Bishop.displayWhite(), figure.Knight.displayWhite(), figure.Rook.displayWhite()],*/