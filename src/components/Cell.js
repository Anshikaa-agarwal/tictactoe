import React from 'react'
import './cell.css'

export default function Cell(props) {
  return (
      <div className="cell" onClick={props.onClick}>
        <h4>{props.value}</h4>
      </div>
  )
}
