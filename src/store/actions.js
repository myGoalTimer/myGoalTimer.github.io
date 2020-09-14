import {ADD_MONEY} from './actionTypes';
import {CHANGE_MONEY_INPUT} from './actionTypes';
import {LAPTOP} from './actionTypes';
import {ANZAHLUNG} from './actionTypes';
import {AUFENTHALT} from './actionTypes';
import {ETC} from './actionTypes';
import {CHECK} from './actionTypes';


const addMoney = () => {
    return {
        type: ADD_MONEY,
    }
}

const changeMoneyInput = (input) =>{
    return {
        type: CHANGE_MONEY_INPUT,
        input
    }
}

const laptop_check = () => {
    return {
        type: LAPTOP,
    }
}

const anzahlung_check = () =>{
    return {
        type: ANZAHLUNG,
    }
}

const aufenthalt_check = () =>{
    return {
        type: AUFENTHALT,
    }
}

const etc_check = () => {
    return {
        type: ETC,
    }
}

const checked = () => {
    return {
        type: CHECK,
    }
}

export {addMoney};
export {changeMoneyInput};
export {laptop_check}
export {anzahlung_check}
export {aufenthalt_check}
export {etc_check}
export {checked}