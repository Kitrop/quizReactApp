import { configureStore, combineReducers} from '@reduxjs/toolkit'
import {questionApi} from "./quizAPI";
import {questionSliceReducer} from "./qustions.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const RootReducer = combineReducers(
   {
     [questionApi.reducerPath]: questionApi.reducer,
     questionSliceReducer: questionSliceReducer
   }
)

export  const store = configureStore({
  reducer: {
    [questionApi.reducerPath]: questionApi.reducer,
    questionSliceReducer: questionSliceReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(questionApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector

export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch