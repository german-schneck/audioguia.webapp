// ActionTypes
export const FETCH_APPS = 'FETCH_APPS';
export const SET_IS_LOADING_APPS = 'SET_IS_LOADING_APPS';
export const SET_APPS = 'SET_APPS';

// Exporter
export function fetchApps(id = null) {
  return {
    type: FETCH_APPS,
    payload: {
      id
    }
  };
}

export function setIsLoadingApps(isLoading) {
  return {
    type: SET_IS_LOADING_APPS,
    payload: {
      isLoading
    }
  };
}

export function setApps(apps = []) {
  return {
    type: SET_APPS,
    payload: {
      apps
    }
  };
}
