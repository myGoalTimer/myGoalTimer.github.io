import {createStore} from 'redux';
import reducer from './goalTimerReducer';
import  {loadState, saveState} from '../localStorage'



const persistedState = loadState();


const moneyStore = createStore(reducer,  persistedState);

export default moneyStore;