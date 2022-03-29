export const STORAGE_KEYS = {
  AUTH_TOKEN: '@authToken'
};

const LocalStorageUtils = {
  /**
   * Obtains according to ID, a value stored in the virtual memory of the client's browser.
   * @param {String} $key identifier of the value we want to obtain.
   */
  get($key) {
    return localStorage.getItem($key) || null;
  },

  /**
   * Stores a value in the virtual memory of the client device.
   * @param {boolean} $key Identifier
   * @param {String} $value Value we want to keep
   */
  set($key, $value) {
    try {
      localStorage.setItem($key, $value);
      return true;
    } catch (error) {
      return false;
    }
  },

  /**
   * Completely cleans all data stored in the client's virtual memory.
   */
  clear() {
    localStorage.clear();
    console.info('The stored data has been completely cleaned.');
    return true;
  }
};

export default LocalStorageUtils;
