import React from 'react';
import ui from './reducers/ui';
import bandwidth from './reducers/bandwidth';

export const UiStore = React.createContext();
export const BandwidthStore = React.createContext();

export const initialState = {
  ui: ui.initialState,
  bandwidth: bandwidth.initialState,
};

export function StoreProvider(props) {
  const [uiState, uiDispatch] = React.useReducer(ui.reducer, ui.initialState);
  const [bandwidthState, bandwidthDispatch] = React.useReducer(
    bandwidth.reducer,
    bandwidth.initialState,
  );

  return (
    <UiStore.Provider value={{ state: uiState, dispatch: uiDispatch }}>
      <BandwidthStore.Provider value={{ state: bandwidthState, dispatch: bandwidthDispatch }}>
        {props.children}
      </BandwidthStore.Provider>
    </UiStore.Provider>
  );
}
