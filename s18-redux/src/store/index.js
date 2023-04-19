// import { createStore } from "redux";
// import createSlice from '@reduxjs/toolkit'

// const initialState = { counter: 0, showCounter: true };

// const counterSlice =createSlice({
//     name : 'counter',
   
// })

// // const counterReducer = (state = initialState, action) => {
// //   if (action.type === "increment") {
// //     return {
// //       counter: state.counter + 1,
// //       showCounter: state.showCounter,
// //     };
// //   }

// //   if (action.type === "increase") {
// //     return {
// //       counter: state.counter + action.value,
// //       showCounter: state.showCounter,
// //     };
// //   }

// //   if (action.type === "decrement") {
// //     return {
// //       counter: state.counter - 1,
// //       showCounter: state.showCounter,
// //     };
// //   }
// //   if (action.type === "toggle") {
// //     return {
// //       showCounter: !state.showCounter,
// //       counter: state.counter,
// //     };
// //   }

// //   return state;
// // };

// const store = createStore(counterReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;