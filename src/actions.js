import {
  SHOW_ALL,
  FIND_CLOSEST,
  TOGGLE_MAP,
  SHOW_IMAGE,
  LOAD_ALL_DOGS
} from './constants';

export function showAllDogs () {
  return {
    type: SHOW_ALL
  };
}

export function loadAllDogs (responses) {
  return {
    type: LOAD_ALL_DOGS,
    responses
  };
}

export function findClosest (zip, responses) {
  return {
    type: FIND_CLOSEST,
    zip,
    responses
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
