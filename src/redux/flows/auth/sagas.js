// Dependencies
import { put, call, delay, takeLatest } from 'redux-saga/effects';

// ActionTypes
import {
  FETCH_AUTH,
  LOGIN_USER,

  setUser,
  setIsLoadingAuth
} from './actions';
import { closeModal, openModal } from '../ui/actions';

// Services
import AuthService from '../../../shared/services/auth';

// Utils
import LocalStorageUtils, { STORAGE_KEYS } from '../../../shared/utils/localStorage';

// Types
import { modalTypesId } from '../../../shared/types/ui';
import errorTypesId from '../../../shared/types/errors';

/**
 * @function fetchAuthProcess()
 * @param payload
 * @returns {Generator<*, void, *>}
 */
function * fetchAuthProcess() {
  try {
    yield put(setIsLoadingAuth(true));
    const authToken = yield call(LocalStorageUtils.get, STORAGE_KEYS.AUTH_TOKEN);

    if (authToken) {
      const response = yield call(AuthService.getMe);

      if (response && response.statusCode === 200) {
        const { data } = response;
        yield put(setUser(data));
        yield delay(3000);
      } else {
        // Hola
      }
    }
    yield put(setIsLoadingAuth(false));
  } catch (e) {
    console.error(e);
    yield put(setIsLoadingAuth(false));
    yield call(LocalStorageUtils.clear);
    yield put(openModal(modalTypesId.ERROR, {
      title: 'La sesión ha expirado',
      description: 'Por razones de seguridad tu sesión ha caducado, por favor vuelve a iniciar sesión para continuar'
    }));
  }
}

export function * watchFetchAuthProcess() {
  yield takeLatest(FETCH_AUTH, fetchAuthProcess);
}

/**
 * @function loginUserProcess()
 * @param payload
 * @returns {Generator<*, void, *>}
 */
function * loginUserProcess({
  payload: {
    email,
    password,
    formikHelpers
  }
}) {
  try {
    yield call(formikHelpers.setSubmitting, true);
    const response = yield call(AuthService.login, email, password);

    if (response && response.statusCode === 200) {
      const { token } = response.data;
      yield call(LocalStorageUtils.set, STORAGE_KEYS.AUTH_TOKEN, token);
      yield put(closeModal());
      window.location.reload();
    } else {
      throw response.data;
    }
  } catch (error) {
    console.log(error);
    const contentByErrorCode = {
      [errorTypesId.WRONG_PASSWORD]: {
        title: 'Contraseña incorrecta',
        description: 'La contraseña introducida no corresponde a la cuenta, comprueba tu información y vuelve a intentarlo.'
      },
      [errorTypesId.WRONG_USER]: {
        title: 'Cuenta no encontrada',
        description: 'No se ha encontrado una cuenta vinculada a esta dirección de correo electrónico'
      }
    };

    yield call(formikHelpers.resetForm);
    yield put(openModal(modalTypesId.ERROR, contentByErrorCode[error.code]));
    yield call(formikHelpers.setSubmitting, false);
  }
}

export function * watchLoginUserProcess() {
  yield takeLatest(LOGIN_USER, loginUserProcess);
}
