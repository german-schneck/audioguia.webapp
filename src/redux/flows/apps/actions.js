// ActionTypes
export const FETCH_APPS = 'FETCH_APPS';
export const SET_IS_LOADING_APPS = 'SET_IS_LOADING_APPS';
export const SET_APPS = 'SET_APPS';
export const FETCH_APP_INVITATIONS = 'FETCH_APP_INVITATIONS';
export const SET_APP_INVITATION = 'SET_APP_INVITATION';

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

export function fetchAppInvitation(appId) {
  return {
    type: FETCH_APP_INVITATIONS,
    payload: {
      appId
    }
  };
}

export function setAppInvitation(appId, invitations) {
  return {
    type: SET_APP_INVITATION,
    payload: {
      appId,
      invitations
    }
  };
}
