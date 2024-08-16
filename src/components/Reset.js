import React from 'react'
import './reset.css'

export default function Reset(props) {
  return (
    <button className="reset" onClick={props.handleReset}>Reset</button>
  )
}
