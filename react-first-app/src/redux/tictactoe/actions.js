export default function changeStep(stepNumber, xIsNext) {
  return {
      type: 'CHANGE_STEP',
      payload: {
        stepNumber,
        xIsNext
      }
  };
}

/*export default function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS', 
    payload: { user: response.data } }
  };
}*/
