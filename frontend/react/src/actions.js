import {
  SHOW_ALL,
  FILTER_BY_ZIP,
  TOGGLE_MAP,
  SHOW_IMAGE,
  LOAD_ALL_DOGS
} from './constants';

export function showAll (responses) {
  return {
    type: SHOW_ALL,
    responses
  };
}

export function loadAllDogs (responses) {
  return {
    type: LOAD_ALL_DOGS,
    responses
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

export function showImage () {
  return {
    type: SHOW_IMAGE
  };
}
