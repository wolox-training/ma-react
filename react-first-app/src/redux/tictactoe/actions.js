export default function changeStep(int, bool) {
  return {
      type: 'CHANGE_STEP',
      stepNumber: int,
      xIsNext: bool
  };
}

/*export default function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS', 
    payload: { user: response.data } }
  };
}*/
