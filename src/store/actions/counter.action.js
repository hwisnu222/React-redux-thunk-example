export const increment = () => {
  return (dispatch, getState) => {
    // get current state using getState
    let currentCount = getState().countReducer.count;

    // dispatch using action type
    dispatch({ type: "SET_COUNT", count: currentCount + 1 });
  };
};
