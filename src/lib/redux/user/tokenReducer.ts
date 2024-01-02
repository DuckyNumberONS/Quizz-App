const INITIAL_STATE = null;
const tokenReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;
    case "CLEAR_TOKEN":
      return null;
    default:
      return state;
  }
};

export default tokenReducer;
