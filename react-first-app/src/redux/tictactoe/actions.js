export function changeStep(stepNumber, xIsNext) {
  return {
    type: 'CHANGE_STEP',
    payload: {
      stepNumber,
      xIsNext
    }
  };
}

export function resetGame() {
  return {
      type: 'RESET_GAME'
  };
}
