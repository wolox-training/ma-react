export default function changeStep(stepNumber, xIsNext) {
  return {
      type: 'CHANGE_STEP',
      payload: {
        stepNumber,
        xIsNext
      }
  };
}
