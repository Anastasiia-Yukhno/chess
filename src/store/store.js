import { createStore } from "redux";
import { state } from "./state";
import ChessBoard from "../chessBoard";
const SETNICK = "SETNICK";
const CLICK = "CLICK";
const UPDATEBOARD = "UPDATEBOARD";
const SETINGAMEWITH = 'SETINGAMEWITH'
const defaultState = state;
function reducer(state = defaultState, action) {
  let newState;
  switch (action.type) {
    case UPDATEBOARD:
      newState = { ...state };
      newState.currentPosition = action.currentPosition;
      return newState;
    case SETNICK:
      newState = { ...state };
      newState.nickName = action.nick;
      return newState;
    case SETINGAMEWITH:
      newState = { ...state };
      newState.inGameWith = action.inGameWith;
      return newState;
    default:
      return state;
  }
}

const store = createStore(reducer);
const clickAction = (value) => ({ type: CLICK, value: value });

store.dispatch({
  type: CLICK,
  value: "sdfv",
});

store.dispatch({
  type: SETNICK,
  nick: "sdfv",
});

export default store;
