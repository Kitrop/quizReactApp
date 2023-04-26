import {FC, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {IPropsSelectField} from "../src/types/type";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SelectField:FC<IPropsSelectField> = ({label, options}) => {

  const [value, setValue] = useState('')

  return (
     <Grid2 mt={3} display="flex" justifyContent="center">
       <FormControl >
         <InputLabel>{label}</InputLabel>
         <Select value={value} label={label} autoWidth={true}>
           { options.map( ({id, name}) => (<MenuItem id={id}  onClick={() => setValue(id)} value={id}>{name} </MenuItem>)) }
         </Select>
       </FormControl>
     </Grid2>
  )
}




export default SelectField;