import { Button } from '@mui/material'
import React from 'react'

function Btn(props) {
  return (
    <Button  variant={props.variant} style={{marginTop:props.margin,width:props.width}}  startIcon={props.icon} >{props.text}</Button>
  )
}

export default Btn