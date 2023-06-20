//import { configureStore } from '@reduxjs/toolkit';
//import teamSlice from "./redux/slices/teams"

//export const store = configureStore({
 // reducer: {
  //  teamData: teamSlice,
  //},
//});


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import teamSlice from "./redux/slices/teams"


const reducer = combineReducers({
   teamData: teamSlice,
  
})


const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;