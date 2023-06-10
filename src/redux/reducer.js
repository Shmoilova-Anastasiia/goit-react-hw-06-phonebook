import { combineReducers } from 'redux';

import { contactsReducer, filterReducer } from './contactSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
