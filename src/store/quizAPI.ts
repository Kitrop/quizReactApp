import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IP, IQuiz} from "../types/type";

export const questionApi = createApi({
  reducerPath: 'question/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com/'
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuiz, IP>({
      query: ({amount, category, difficulty}) => ({
        url: `api.php?`,
        params: {
          amount: amount,
          category: category,
          difficulty: difficulty
        }
      })
    })
  })
})

export const {useGetQuestionsQuery} = questionApi