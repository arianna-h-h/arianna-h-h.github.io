import {
  // SHOW_ALL,
  // // FILTER_BY_ZIP,
  // TOGGLE_MAP
} from './constants'

const initialState = {
  responses: [],
  showMap: false,
  filterbyZip: false,
  filteredResponses: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case SHOW_ALL:
    //   return {
    //     ...state,
    //     showMap: false,
    //     filterbyZip: false,
    //     filteredResponses: []
    //   };
    // // case FILTER_BY_ZIP:
    // //   return {
    // //       ...state,
    // //       state.filter(where action.zip == state.zip)
    // //       filterByZip: true
    // //
    // //   };
    // case TOGGLE_MAP:
    //   return {
    //     ...state,
    //     !showMap
    //   };
    default:
      return state;
  }
};

export default reducer;
