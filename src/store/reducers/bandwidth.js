import {
  RESET_BANDWIDTH,
  SET_BANDWIDTH,
} from '../actions/stats';

const initialState = {
  bandwidth: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_BANDWIDTH:
      return {
        ...state,
        bandwidth: action.bandwidth,
      };
    case RESET_BANDWIDTH:
      return initialState;
    default:
      return state;
  }
};

const exported = { initialState, reducer };

export default exported;
