// initial state
const initialState = {
  count: 0,
};

// create reducer state
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.count };
    default:
      return state;
  }
}

export default reducer;
