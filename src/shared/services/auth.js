import LocalStorage, { STORAGE_KEYS } from '../utils/localStorage';
import fetch from './fetch';

const AuthService = {
  login: async function(email, password) {
    try {
      const response = await fetch({
        method: 'POST',
        endpoint: '/user/login',
        body: {
          email,
          password
        }
      });

      if (response) {
        return response;
      }
    } catch (e) {
      return false;
    }
  },

  getMe: async function() {
    try {
      const response = await fetch({
        method: 'GET',
        endpoint: '/user/me'
      });

      if (response) {
        return response;
      }
    } catch (e) {
      return false;
    }
  },

  checkToken: function() {
    return LocalStorage.get(STORAGE_KEYS.AUTH_TOKEN);
  }
};

export default AuthService;
