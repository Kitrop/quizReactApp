import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    newQuiz: (state, action) => {
      state.push(...action.payload)
    }
  }
})


export  const questionSliceReducer = questionsSlice.reducer