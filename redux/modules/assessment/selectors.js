// import { createSelector } from 'reselect';
import { NAME } from './duck';

export const getCurrentStep = state => state.modules[NAME].assessStep;
export const getIsPassUpdating = state => state.modules[NAME].isUpdatingPass;
export const getLpStep = state => state.modules[NAME].lpStep;
