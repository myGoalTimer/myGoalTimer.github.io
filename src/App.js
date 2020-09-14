import React from 'react';
import logo from './logo.svg';
import './App.css';
import moneyStore  from './store/store';
import {Provider} from 'react-redux'
import  {loadState, saveState} from './localStorage'
import MoneyForm from './GoalTimer';


const goelTimerStyle = {
  backgroundColor: "#ff4d4d",
  border: "1px solid #ff4d4d",
  height: "200vh",
  overflowX: "hidden",
}

const heightStyle = {
  width: "1000px"
}

const persistedState = loadState();
moneyStore.subscribe(() => {
  saveState(moneyStore.getState())
})



function App() {
  return (
    <Provider store = {moneyStore}>
        <div className="App text-center">
          {/* ###################################################################################
          ------------------------------------ GOAL TIMER APP -----------------------------------
          #######################################################################################*/}
          <div style={goelTimerStyle} className="">
              <div className="row justify-content-center align-items-center">
                <MoneyForm/>
              </div>
            </div>
        </div>  
          {/*......................................................................................*/}
      </Provider> 
  );
}

export default App;
