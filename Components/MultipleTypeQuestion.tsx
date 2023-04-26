import {Checkbox, FormControlLabel, FormLabel} from "@mui/material";
import {FC} from "react";
import {IPropTypeQuestions} from "../src/types/type";

const MultipleTypeQuestion: FC<IPropTypeQuestions> = ({name_question,correct_answer, incorrect_answers}) => {
  const arr: string[] = [...incorrect_answers, correct_answer]
  arr.sort(() => Math.random() - 0.5);
  const item = arr.map((val) => {
    return (
       <div>
         <FormControlLabel control={<Checkbox value={val} />} label={val} />
       </div>
    )
  })
  return (
     <div>
       <FormLabel id="demo-radio-buttons-group-label">{name_question}</FormLabel>
       <div>
         {item}
       </div>
     </div>
  );
};

export default MultipleTypeQuestion;