export const STATE_NAMESPACE = 'lv-state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_NAMESPACE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_NAMESPACE, serializedState);
  } catch (err) {
    console.error('FAILED TO SAVE STATE');
    return undefined;
  }
};
