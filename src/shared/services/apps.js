import fetch from './fetch';

const AppService = {
  getAll: async function(d) {
    try {
      const response = await fetch({
        method: 'GET',
        endpoint: '/app/list'
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
        endpoint: `/app/${id}`
      });

      if (response) {
        return response;
      }
    } catch (e) {
      return false;
    }
  },

  inviteToMembership: async function(id, emails) {
    try {
      const response = await fetch({
        method: 'POST',
        endpoint: `/app/${id}/inviteToMembership`,
        body: {
          emails: JSON.stringify(emails)
        }
      });

      if (response) {
        return response;
      }
    } catch (e) {
      return false;
    }
  },

  getMyInvitations: async function(id) {
    try {
      const response = await fetch({
        method: 'GET',
        endpoint: `/app/${id}/getMyInvitations`
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
