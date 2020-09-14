import {ADD_MONEY} from './actionTypes';
import {CHANGE_MONEY_INPUT} from './actionTypes';
import {LAPTOP} from './actionTypes';
import {ANZAHLUNG} from './actionTypes';
import {AUFENTHALT} from './actionTypes';
import {ETC} from './actionTypes';
import {CHECK} from './actionTypes';
import  {loadState, saveState} from '../localStorage'


const persistedState = loadState();

const initialState =  {
    moneyNeeded: 5000,
    moneyIGot: 0,
    moneyInput: 0,
    laptop: false,
    anzahlung: false,
    aufenthalt: false,
    etc: false,
    check: [false, false, false, false],
}

function reducer (state = initialState, action){
    switch (action.type) {
        case ADD_MONEY : return {
            ...state,
            moneyIGot: (state.moneyIGot + parseInt(state.moneyInput)),
            moneyInput: 0,
        }
        case CHANGE_MONEY_INPUT: return {
            ...state,
            moneyInput: action.input,
        }

        case LAPTOP: return {
            ...state,
            laptop: !state.laptop,
        }

        case ANZAHLUNG: return {
            ...state,
            anzahlung: !state.anzahlung,
        }

        case AUFENTHALT: return {
            ...state,
            aufenthalt: !state.aufenthalt,
        }

        case ETC: return {
            ...state,
            etc: !state.etc,
        }

        case CHECK: return {
            ...state,
            check: [state.laptop, state.anzahlung, state.aufenthalt, state.etc],
        }

        default:
          return{
            ...state  
          } 
        
    }      
}

export default reducer;