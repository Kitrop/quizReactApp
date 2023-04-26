import {useAppSelector} from "../src/store/store";
import MultipleTypeQuestion from "./MultipleTypeQuestion";
import BoolTypeQuestion from "./BoolTypeQuestion";

const Quiz = () => {
  const questions = useAppSelector(state => state.questionSliceReducer)
  console.log(questions)

  const listQuestions = questions.map( (q) => {
    return (
       <div>
         {q.type === "multiple" ? <MultipleTypeQuestion correct_answer={q.correct_answer} incorrect_answers={q.incorrect_answers}  name_question={q.question}/> : <BoolTypeQuestion  correct_answer={q.correct_answer} incorrect_answers={q.incorrect_answers}   name_question={q.question}/>}
       </div>
       )
  } )
  return (
     <>
       <h1>Hello!</h1>
       <div>
         {listQuestions}
       </div>
     </>
  );
};

export default Quiz;