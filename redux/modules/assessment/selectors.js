// import { createSelector } from 'reselect';
import { NAME } from './duck';

export const getCurrentStep = state => state.modules[NAME].currentStep;
export const getIsPassUpdating = state => state.modules[NAME].isUpdatingPass;
