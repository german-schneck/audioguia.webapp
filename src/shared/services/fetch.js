// Vars
import Console from '../utils/console';
import LocalStorageUtils, { STORAGE_KEYS } from '../utils/localStorage';

const API_ENDPOINT = process.env.REACT_APP_API_URL;

function fetchAPI({
  method,
  endpoint,
  body = null
}) {
  let opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      pragma: 'no-cache',
      'cache-control': 'no-cache'
    }
  };

  const authToken = LocalStorageUtils.get(STORAGE_KEYS.AUTH_TOKEN);

  if (authToken) {
    opts = {
      ...opts,
      headers: {
        ...opts.headers,
        authorization: 'Bearer ' + authToken
      }
    };
  }

  if (['POST', 'PUT', 'DELETE'].includes(method)) {
    opts = {
      ...opts,
      body: body ? JSON.stringify(body) : {}
    };
  } else {
    endpoint = body ? `${endpoint}?${new URLSearchParams(body)}` : endpoint;
  }

  return fetch(`${API_ENDPOINT}${endpoint}`, opts)
    .then(async(res) => {
      const data = await res.json();
      return {
        statusCode: res.status,
        data
      };
    })
    .catch((err) => {
      Console.error(err);
    });
}

export default fetchAPI;
