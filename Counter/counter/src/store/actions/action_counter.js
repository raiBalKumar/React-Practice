export const increase = number => dispatch => {
  let data = number + 1;
  dispatch({
    type: "INCREMENT",
    payload: data
  });
};

export const decrease = number => dispatch => {
  let data = number - 1;
  dispatch({
    type: "DECREMENT",
    payload: data
  });
};
