import React from 'react'
import './TimeLeft.css'

export default function TimeLeft({hours, minutes, seconds}) {
  console.log(hours);
  return (
    <>
        <h3>{hours} : {minutes} : {seconds}</h3>
    </>
  )
}

  TimeLeft.defaultProps = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
