import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {addMoney} from './store/actions';
import {changeMoneyInput} from './store/actions';
import {laptop_check} from './store/actions';
import {anzahlung_check} from './store/actions';
import {aufenthalt_check} from './store/actions';
import {etc_check}  from './store/actions';
import {checked}  from './store/actions';
import {connect} from 'react-redux'
import moneyStore  from './store/store';




const daysLeftHeader = {
    color: "white",
    fontSize: "80px",
    marginTop: "0px",
    borderBottom: "2px solid white",
    paddingBottom: "10px",
}

const moneyContainer = {
   width: "400px", 
   outline: "none ",
   border: "2px solid white",
   borderLeft:  "none",
   borderRight: "none",
   fontWeight: "bold", 
   marginTop: "30px",
}

const moneyHeader = {
    color: "white",
    fontSize: "30px",
    marginTop: "20px",
    border: "1px solid white",
    
}

const goalHeaderRed = {
    color: "white",
    fontSize: "30px",
    marginTop: "20px",
    border: "1px solid white",
}

const goalHeaderGreen = {
    color: "white",
    fontSize: "30px",
    marginTop: "20px",
    border: "1px solid white",
    background: "#66ff66" 
}


const weekHeader = {
    color: "white",
    fontSize: "40px",
    marginTop: "20px",
    borderBottom: "2px solid white",
    paddingBottom: "20px"
}


const checkStyle = {
    color: "white",
    fontSize: "18px",
    margin: "5px", 
 
}

const checkButtonStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "10px",
    margin: "3px",
}


function MoneyForm(props) {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var date1 = new Date(); //"now"
    var date2 = new Date("04/19/2021")
    var date3 = new Date("03/1/2021")
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 
    var diffDays2 = parseInt((date3 - date1) / (1000 * 60 * 60 * 24 * 7), 10); 
    
  console.log(props.check) 

    return(
        /*###################################################################################
          ------------------------------------ MONEY-----------------------------------
          ###################################################################################*/
        
        <div  style={moneyContainer} className="d-flex flex-column">
            <h1 style = {daysLeftHeader}>{diffDays} Tage</h1>
            <h6  style = {weekHeader}>{diffDays2} Wochen</h6>  
            <h5  style={moneyHeader} className="m-3 p-2">Ziel: {props.moneyNeeded}€</h5>
            <h5  style={moneyHeader} className="m-3 p-2">Aktuell: {props.moneyIGot}€</h5> 
            <h5  style={moneyHeader} className="m-3 p-2">Bis zum Ziel: {props.moneyNeeded - props.moneyIGot}€</h5> 
            <form>
              <input type="text" onChange = { (e) => props.changeMoneyInput(e.target.value)}></input>
              <button type = "submit" onClick = {props.addMoney} className="m-1 ">Oh Yeah</button>
            </form>

            {/* ###################################################################################
          ------------------------------------ PRE GOALS -----------------------------------
          #######################################################################################*/}

            <div style={moneyContainer} className="">
              <h5 style = {props.check[0] ? goalHeaderGreen : goalHeaderRed} className="m-3 p-2">Laptop ~ 1000€</h5>
              <h5 style = {props.check[1]  ? goalHeaderGreen : goalHeaderRed}   className="m-3 p-2">Anzahlung {'->'} 2000€</h5> 
              <h5 style = {props.check[2]  ? goalHeaderGreen : goalHeaderRed}  className="m-3 p-2">Aufenthalt ~ 1200€</h5> 
              <h5 style = {props.check[3]  ? goalHeaderGreen : goalHeaderRed}   className="m-3 p-2">ETC ~ 500€</h5>   
            </div>
         
            {/* ###################################################################################
          ------------------------------------ CHECK CHECK -----------------------------------
          #######################################################################################*/}
         
            <div className="d-flex flex-column">
               <form>
                  <div >
                    <label style={checkStyle} for = "Laptop">Laptop</label>
                    <input style = {checkButtonStyle} type="checkbox" defaultChecked = {props.laptop} onChange = {props.laptop_check} name="Laptop"></input>
                    <label style={checkStyle} for = "Anzahlung">Anzahlung</label>
                    <input style = {checkButtonStyle} type="checkbox" defaultChecked = {props.anzahlung} onChange = {props.anzahlung_check}  name="Anzahlung"></input>
                    <label style={checkStyle} for = "Aufentshalt">Aufenhalt</label>
                    <input style = {checkButtonStyle} type="checkbox" defaultChecked = {props.aufenthalt} onChange = {props.aufenthalt_check}   name="Aufenthalt"></input>
                    <label style={checkStyle} for = "ETC">ETC</label>
                    <input style = {checkButtonStyle} type="checkbox" defaultChecked = {props.etc} onChange = {props.etc_check}   name="ETC"></input>
                    <button  type="submit" onClick = {props.checked}  >Check Check!</button> 
                   </div>
               </form>
            </div>  
        </div>
    );
}




const mapStateToProps = state => {
  return {
    moneyIGot: state.moneyIGot,
    moneyNeeded: state.moneyNeeded,
    moneyInput: state.moneyInput,
    laptop:  state.laptop,
    anzahlung: state.anzahlung,
    aufenthalt: state.aufenthalt,
    etc: state.etc,
    check: state.check
  }
}



  const mapDispatchToProps = dispatch => {
    return {
      addMoney: () => dispatch(addMoney()),
      changeMoneyInput: (e) => dispatch(changeMoneyInput(e)),
      laptop_check: () => dispatch(laptop_check()),
      anzahlung_check: () => dispatch(anzahlung_check()),
      aufenthalt_check: () => dispatch(aufenthalt_check()),
      etc_check: () => dispatch(etc_check()),
      checked: () => dispatch(checked())
     }
  }
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MoneyForm)
  




export {MoneyForm};
