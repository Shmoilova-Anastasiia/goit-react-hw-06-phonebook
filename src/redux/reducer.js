import { combineReducers } from 'redux';

import { contactsReducer } from './contact/contactSlice';
import { filterReducer } from './filter/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
