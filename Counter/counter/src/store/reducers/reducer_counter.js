const initialState = {
  number: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        number: action.payload
      };
    case "DECREASE":
      return {
        ...state,
        number: action.payload
      };
    default:
      return state;
  }
};
