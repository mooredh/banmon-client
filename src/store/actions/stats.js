export const SET_BANDWIDTH = 'SET_BANDWIDTH';
export const RESET_BANDWIDTH = 'RESET_BANDWIDTH';

export const setBandwidth = (bandwidth) => {
  return {
    type: SET_BANDWIDTH,
    bandwidth,
  };
};
