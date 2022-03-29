import fetch from './fetch';

const AppService = {
  getAll: async function(d) {
    try {
      const response = await fetch({
        method: 'GET',
        endpoint: '/apps'
      });

      if (response) {
        return response;
      }
    } catch (e) {
      return false;
    }
  },

  getById: async function(id) {
    try {
      const response = await fetch({
        method: 'GET',
        endpoint: `/apps/${id}`
      });

      if (response) {
        return response;
      }
    } catch (e) {
      return false;
    }
  }
};

export default AppService;
