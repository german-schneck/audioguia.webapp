export const appTypesId = {
  AUDIOGUIA_ALHAMBRA: 1,
  AUDIOGUIA_CANETE_LA_REAL: 2,
  AUDIOGUIA_MEZQUITA_DE_CORDOBA: 3
};

export const appStateTypesId = {
  UNAVAILABLE: 'unavailable',
  READY_TO_BUY: 'ready-to-buy',
  ALREADY_PURCHASED: 'already-purchased'
};

const appsIds = {
  [appTypesId.AUDIOGUIA_ALHAMBRA]: {
    image: 'https://images.unsplash.com/photo-1564740603199-5f56138c6679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  [appTypesId.AUDIOGUIA_CANETE_LA_REAL]: {
    image: 'https://images.unsplash.com/photo-1580076555591-0901f1748a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
  },
  [appTypesId.AUDIOGUIA_MEZQUITA_DE_CORDOBA]: {
    image: 'https://images.unsplash.com/photo-1623002866514-4ebad37868fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
};

export default appsIds;
