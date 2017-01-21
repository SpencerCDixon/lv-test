import { createSelector } from 'reselect';
import { NAME } from './duck';

export const getAuth = state => state.modules[NAME].auth;

export const getPasswordResetId = createSelector(
  getAuth, auth => auth.password_reset_id
);

export const getAuthToken = createSelector(
  getAuth, auth => auth.auth_token
);
