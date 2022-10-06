import React from 'react'
import {TextField} from "@mui/material"

function InputText(props) {
  return (
    <div style={{marginTop:props.margin,width:props.width}}   >
       <TextField fullWidth style={{width:props.width}}  label={props.label} variant={props.variant} />
    </div>
  )
}

export default InputText