import React from 'react'
import {TextField} from "@mui/material"

function InputText(props) {
  return (
    <div>
       <TextField in label={props.label} variant={props.variant} />
    </div>
  )
}

export default InputText