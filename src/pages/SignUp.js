import React from 'react'
import InputText from "../components/InputText"
import Btn from "../components/Btn"
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { CheckBox } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';


function SignUp() {
    const inputs=[
        {label:"Name",variant:"outlined",margin:20,width:400 },
        {label:"Username",variant:"outlined",margin:20,width:400 },
        {label:"Password",variant:"outlined",margin:20,width:400},
        {label:"Retype-Password",variant:"outlined",margin:20,width:400}
      ]

  return (
    <div  style={{height:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}    >
    <Box elevetion={7}  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           {
           inputs.map((input)=>
             <InputText width={input.width} label={input.label} variant={input.variant} margin={input.margin} /> )
         }
         <Btn variant="contained" width={400} margin={20} text="SignUp"/>
         
    </Box>
</div>
  )
}

export default SignUp
