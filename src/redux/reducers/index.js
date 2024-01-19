import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_QUERY_DATA_SUCCESS } from "../actions/results.js";

const initialState = {
  data: [],
  error: null,
  data2: {} /*aggiunta*/,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    case FETCH_QUERY_DATA_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        data2: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
export default dataReducer;
