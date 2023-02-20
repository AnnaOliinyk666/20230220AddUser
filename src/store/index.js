import { createStore } from  'redux';
import { chooseGender } from './reduser/chooseGender';

export const store = createStore(chooseGender);