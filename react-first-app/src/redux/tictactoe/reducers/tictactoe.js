const initialState = {
  stepNumber: 0,
  xIsNext: true
};

export default function tictactoe(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_STEP':
      return {
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };
      break;
    case "RESET_GAME":
    return {
      stepNumber: 0,
      xIsNext: true
    };
    break;
    default:
      return state;
  }
}
