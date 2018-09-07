const initialState = {
  logged: "no",
  user: null
};

export default function login(state = initialState, action) {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: "waiting"
      }
    break;
    case "LOGIN_SUCCESS":
      return {
        logged: "yes",
        user: action.payload.user
      }
    break;
    case "LOGIN_FAILURE":
      return {
        ...state,
        logged: "failure"
      }
    break;
    default:
        return state;
  }
}
