import React from 'react'

export default function Alert1(props) {
  return (
    
        props.alert && <div class= "alert alert-success" role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
        
        </div>
    
  )
  }

