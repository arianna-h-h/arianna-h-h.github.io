import {
  SHOW_ALL,
  FIND_CLOSEST,
  TOGGLE_MAP,
  LOAD_ALL_DOGS
} from './constants';

const initialState = {
  responses: [],
  showMap: true,
  filterbyZip: false,
  filteredResponses: [],
  showAll: true
};

/* TODO update function to find closest address to zipcode by using GPS points
and Google Geocoding API */
function findSimilarZip (zip, responses) {
  let closestDog = null;
  let currentDifference = 100000;
  responses.forEach(response => {
    let difference = Math.abs(response.zip_code - zip);
    if (difference <= currentDifference) {
      closestDog = response;
      currentDifference = difference;
    }
  });
  return [closestDog];
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_DOGS:
      return {
        ...state,
        responses: action.responses
      };
    case SHOW_ALL:
      return {
        ...state,
        showAll: true,
        showMap: false,
        filterbyZip: false,
        filteredResponses: []
      };
    case FIND_CLOSEST:
      return {
        ...state,
        filteredResponses: findSimilarZip(action.zip, action.responses),
        filterByZip: true,
        showAll: false
      };
    // FIXME map functionality is not yet working
    case TOGGLE_MAP:
      return {
        ...state,
        showMap: !state.showMap
      };
    default:
      return state;
  }
};

export default reducer;
