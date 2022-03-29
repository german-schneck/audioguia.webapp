// Dependencies
import { all } from 'redux-saga/effects';

// Auth
import {
  watchFetchAuthProcess,
  watchLoginUserProcess
} from './flows/auth/sagas';

// Apps
import { watchFetchAppsProcess } from './flows/apps/sagas';

/**
 * Sagas
 */

// Exporter
export default function * rootSagas() {
  yield all([
    watchFetchAuthProcess(),
    watchLoginUserProcess(),

    watchFetchAppsProcess()
  ]);
}
