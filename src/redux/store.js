import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSliсe';
import { contactsReducer } from './contactsSliсe';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
});