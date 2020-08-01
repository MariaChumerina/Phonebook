export const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem('app_state', serialisedState);
};

export const loadState = () => {
  const serialisedState = window.localStorage.getItem('app_state');
  if (!serialisedState) return undefined;
  return JSON.parse(serialisedState);
};
