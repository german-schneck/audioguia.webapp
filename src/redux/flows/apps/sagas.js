// Dependencies
import { put, call, takeLatest } from 'redux-saga/effects';

// ActionTypes
import {
  FETCH_APP_INVITATIONS,
  FETCH_APPS, setAppInvitation,

  setApps,
  setIsLoadingApps
} from './actions';

// Types
import { modalTypesId } from '../../../shared/types/ui';

// Actions
import { openModal } from '../ui/actions';
import AppService from '../../../shared/services/apps';

/**
 * @function fetchAppsProcess()
 * @param payload
 * @returns {Generator<*, void, *>}
 */
function * fetchAppsProcess({ payload: { id } }) {
  try {
    yield put(setIsLoadingApps(true));

    if (id) {
      const response = yield call(AppService.getById, id);

      if (response && response.statusCode === 200) {
        yield put(setApps([response.data]));
        yield put(setIsLoadingApps(false));
      }
    } else {
      const response = yield call(AppService.getAll);

      if (response && response.statusCode === 200) {
        yield put(setApps(response.data));
        yield put(setIsLoadingApps(false));
      }
    }
  } catch (e) {
    console.error(e);
    yield put(setIsLoadingApps(false));
    yield put(openModal(modalTypesId.ERROR, {
      title: 'No se han podido obtener las apps',
      description: 'Lo sentimos, no se ha podido recuperar el listado de apps. Por favor, reintente en otro momento.'
    }));
  }
}

export function * watchFetchAppsProcess() {
  yield takeLatest(FETCH_APPS, fetchAppsProcess);
}

/**
 * @function fetchAppInvitation()
 * @param payload
 * @returns {Generator<*, void, *>}
 */
function * fetchAppInvitationProcess({ payload: { appId } }) {
  try {
    yield put(setIsLoadingApps(true));
    const response = yield call(AppService.getMyInvitations, appId);

    if (response && response.statusCode === 200) {
      const { data } = response;
      yield put(setAppInvitation(appId, data));
    }
    yield put(setIsLoadingApps(false));
  } catch (e) {
    console.error(e);
    yield put(setIsLoadingApps(false));
  }
}

export function * watchFetchAppInvitationProcess() {
  yield takeLatest(FETCH_APP_INVITATIONS, fetchAppInvitationProcess);
}
