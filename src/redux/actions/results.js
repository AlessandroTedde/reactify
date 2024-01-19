export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_QUERY_DATA_SUCCESS = "FETCH_QUERY_DATA_SUCCESS";

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchQueryDataSuccess = (data) => ({
  type: FETCH_QUERY_DATA_SUCCESS,
  payload: data,
});
