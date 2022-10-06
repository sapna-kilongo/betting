import React from 'react'
import InputText from "../components/InputText"
import Btn from "../components/Btn"
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { CheckBox } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from '@mui/material/colors'

function Login() {
  const inputs=[
    {label:"Username/Email",variant:"outlined",margin:20,width:400 },{label:"Password",variant:"outlined",margin:20,width:400}
  ]

  return (
     <div  style={{height:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}    >
         <Box elevetion={7}  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                {
                inputs.map((input)=>
                  <InputText width={input.width} label={input.label} variant={input.variant} margin={input.margin} /> )
              }
              <Box style={{alignSelf:"self-start",marginTop:5,padding:5}}>
                 <CheckBox   titleAccess='Rember'>Remember me</CheckBox>
              </Box>
              <Btn variant="contained" width={400} margin={20} text="Login"/>
              <Box style={{alignSelf:"self-start",marginTop:5,padding:5}}>
              <Typography  variant='span' >Not registered?</Typography>
              <Typography variant='span' >Sign Up</Typography>
              </Box>
              <Btn variant="outlined" width={400} margin={20} icon={<DeleteIcon />} text="Google"/>
              <Box style={{alignSelf:"self-start",marginTop:5,padding:5}}>
              <Typography  variant='span' >forgot password?</Typography>
              </Box>
         </Box>
     </div>
  )
}

export default Login
