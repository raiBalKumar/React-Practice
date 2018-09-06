import { FETCH_WEATHER } from "../actions";
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log(action.payload.data);
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
