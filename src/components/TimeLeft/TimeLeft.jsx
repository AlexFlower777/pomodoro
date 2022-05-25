import React, {useEffect} from 'react'
import './TimeLeft.css'

export default function TimeLeft({hours, minutes, seconds}) {
  return (
    <>
        <h3>{minutes} : {seconds}</h3>
    </>
  )
}

  TimeLeft.defaultProps = {
    minutes: 0,
    seconds: 0
  }
