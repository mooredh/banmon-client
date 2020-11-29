import {UI_START_LOADING, UI_STOP_LOADING, RESET_UI} from '../actions/ui';

const initialState = {
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UI_STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case RESET_UI:
      return initialState;
    default:
      return state;
  }
};

const exported = { initialState, reducer };

export default exported;
