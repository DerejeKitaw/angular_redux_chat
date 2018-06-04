
import { Action } from 'redux';
import { User } from './user.model';
import * as UserActions from './user.actions';

/**
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface UsersState {
  currentUser: User;
}

const initialState: UsersState = {
  currentUser: null
};

export const UsersReducer =
  function(state: UsersState = initialState, action: Action): UsersState {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
    const user: User = (<UserActions.SetCurrentUserAction>action).user;
      return {
        currentUser: user
      };
    default:
      return state;
  }
};

