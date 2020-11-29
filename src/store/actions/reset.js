import {RESET_UI} from './ui';
import {RESET_SETTINGS} from './settings';
import {RESET_STATS} from './stats';

export const resetApp = (dispatch) => {
  dispatch({type: RESET_UI});
  dispatch({type: RESET_SETTINGS});
  dispatch({type: RESET_STATS});
};
