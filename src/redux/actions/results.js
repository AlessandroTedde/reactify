export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_ROCK_ARTIST = "FETCH_ROCK_ARTIST";
export const FETCH_POP_ARTIST = "FETCH_POP_ARTIST";
export const FETCH_HIPHOP_ARTIST = "FETCH_HIPHOP_ARTIST";
export const SET_QUERY = "SET_QUERY";

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchRockArtist = (artist) => ({
  type: FETCH_ROCK_ARTIST,
  payload: artist,
});

export const fetchPopArtist = (artist) => ({
  type: FETCH_POP_ARTIST,
  payload: artist,
});

export const fetchHipHopArtist = (artist) => ({
  type: FETCH_HIPHOP_ARTIST,
  payload: artist,
});
