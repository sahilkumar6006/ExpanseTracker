import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'
// import { useReducer } from "react";

const MyStore = configureStore({
  reducer:{
    user: UserReducer
  }
})

export default MyStore