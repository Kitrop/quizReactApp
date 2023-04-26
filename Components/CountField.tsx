import Grid2 from "@mui/material/Unstable_Grid2";
import {FormControl, TextField} from "@mui/material";

const CountField = () => {
  return (
     <>
       <Grid2 mt={3} mb={3} display="flex" justifyContent="center">
         <FormControl>
           <TextField
              label={'Count questions'}
              type={'number'}
           />
         </FormControl>
       </Grid2>
     </>
  );
};



export default CountField;