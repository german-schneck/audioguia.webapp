// Dependencies
import { combineReducers } from 'redux';

/**
 * Reducers
 */
import ui from './flows/ui/reducer';
import auth from './flows/auth/reducer';
import apps from './flows/apps/reducer';

// Exporter
export default combineReducers({
  ui,
  auth,
  apps
});
