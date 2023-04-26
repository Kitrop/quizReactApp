import SelectField from "./SelectField";
import {optionCategory, optionDifficulty} from "../src/types/dataSettings";
import CountField from "./CountField";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button, Link} from "@mui/material";
import {useGetQuestionsQuery} from "../src/store/quizAPI";
import {useAppDispatch, useAppSelector} from "../src/store/store";
import {FormEvent} from "react";
import {questionsSlice} from "../src/store/qustions.slice";
import Quiz from "./Quiz";
import {NavLink, useNavigate} from "react-router-dom";

const Settings = () => {
  // Query
  const {data, isLoading, error} = useGetQuestionsQuery({amount: 10, category: 19, difficulty: 'easy'})

  // Selector
  const questions = useAppSelector(state => state.questionSliceReducer)

  // Dispatch
  const dispatch = useAppDispatch()

  const navigate = useNavigate();

  // OnSubmit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(questionsSlice.actions.newQuiz(data.results))
    console.log(questions)
    navigate("/quiz")
  }

  return (
     <>
       <form onSubmit={handleSubmit}>
         <Grid2 container display={'flex'} flexDirection={'column'}>
           <SelectField label={'Category'} options={optionCategory.trivia_categories} />
           <SelectField label={'Difficulty'} options={optionDifficulty} />
           <CountField />
           <Button variant="contained" type={'submit'}>GO!~!!</Button>
         </Grid2>
       </form>
     </>
  )
}

export default Settings;