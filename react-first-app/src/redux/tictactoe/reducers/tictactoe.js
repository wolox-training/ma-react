const initialState = {
  stepNumber: 0,
  xIsNext: true
};

export default function tictactoe(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_STEP":
      return {
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };
      break;
  case "LOGIN_SUCCESS":
      return {
        ...state,
        logged: "yes"
      }
      default:
        return state;
  }
}
