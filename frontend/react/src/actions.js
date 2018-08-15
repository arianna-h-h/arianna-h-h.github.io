import {
  SHOW_ALL,
  FILTER_BY_ZIP,
  TOGGLE_MAP,
  FETCH_IMAGE
} from './constants'

export function showAll ({ dogs }) {
  return {
    type: SHOW_ALL,
    dogs
  };
}


export function filterByZip ({ zip }) {
  return {
    type: FILTER_BY_ZIP,
    zip
  };
}


export function toggleMap () {
  return {
    type: TOGGLE_MAP
  };
}

export function showAll () {
  return {
    type: SHOW_ALL
  };
}
