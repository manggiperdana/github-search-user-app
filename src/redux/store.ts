import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";
import {TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    person: UserSlice.reducer,
  },
});
export const useAppDispatch:()=> typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector