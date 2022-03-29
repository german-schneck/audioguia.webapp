import { unNormalizeState } from '../../../shared/utils/state';

export const getApps = (state) => unNormalizeState(state.apps.data);

export const getAppById = (state, id) => state.apps.data[id] ?? null;

export const getIsLoadingApps = (state) => state.apps.isLoading;
