export default function changeStep(int, bool) {
  return {
      type: 'CHANGE_STEP',
      stepNumber: int,
      xIsNext: bool
  };
}
