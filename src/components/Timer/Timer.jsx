import {useEffect, useState, useRef} from 'react';
import TimeLeft from '../TimeLeft/TimeLeft'

export default function Timer() {

  const mounted = useRef(false)
  const [time, setTime] = useState(500)

  let timeLeft = {}

  useEffect(() => {
    console.log('UE - Render in Timer with empty deps')
    let timer;
    if (time > 0) {
    timer = setInterval(()=>{
      console.log('log in interval');
      setTime(prev => prev - 1)
    }, 1000);
  }
    return () => clearInterval(timer)    
  }, [time])

  if (time > 0) {
    timeLeft = {
      hours: Math.floor((time / (60 * 60))),
      minutes: Math.floor((time / 60) % 60),
      seconds: Math.floor(time % 60)
    }
  }

  return (
    <>
      {time ? <TimeLeft hours={timeLeft.hours} minutes={timeLeft.minutes} seconds={timeLeft.seconds}/> : <p>Expired</p>}
    </>
  )
}
