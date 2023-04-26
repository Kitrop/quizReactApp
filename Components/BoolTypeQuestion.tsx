import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {FC} from "react";
import {IPropTypeQuestions} from "../src/types/type";


const BoolTypeQuestion: FC<IPropTypeQuestions> = ({name_question, correct_answer, incorrect_answers}) => {

  const arr: string[] = [...incorrect_answers, correct_answer]
  arr.sort(() => Math.random() - 0.5);
  const item = arr.map( val => {
    return (
       <FormControlLabel value={val} control={<Radio />} label={val} />
    )
  })

  return (
     <div>
       <FormLabel id="demo-radio-buttons-group-label">{name_question}</FormLabel>
       <RadioGroup
          label
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
       >
         {item}
       </RadioGroup>
     </div>
  );
};

export default BoolTypeQuestion;