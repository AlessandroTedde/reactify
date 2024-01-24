import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_QUERY,
  FETCH_ROCK_ARTIST,
  FETCH_POP_ARTIST,
  FETCH_HIPHOP_ARTIST,
} from "../actions/results.js";

const initialState = {
  data: [],
  error: null,
  dataRock: [],
  dataPop: [],
  dataHipHop: [],
  query: "yello",
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
    case FETCH_ROCK_ARTIST:
      console.log(action.payload);
      return {
        ...state,
        dataRock: action.payload,
        error: null,
      };
    case FETCH_POP_ARTIST:
      console.log(action.payload);
      return {
        ...state,
        dataPop: action.payload,
        error: null,
      };
    case FETCH_HIPHOP_ARTIST:
      console.log(action.payload);
      return {
        ...state,
        dataHipHop: action.payload,
        error: null,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
