import {useEffect, useState, useRef} from 'react';

import TimeLeft from '../TimeLeft/TimeLeft'
import Message from '../Message/Message';

import './style.css'
import song from './s3.mp3'

export default function Timer() {

  const mounted = useRef(false)
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(1500)

  let timeLeft = {}

  useEffect(() => {
    let timer;
    if (start && time > 0) {
    timer = setInterval(()=>{
      console.log('log in interval');
      setTime(prev => prev - 1)
    }, 1000);
  }
    return () => clearInterval(timer)    
  }, [time, start])

  useEffect(() => {
    if(start && time === 0){
      setStart(false)
    }
  })

  useEffect(() => {
    if(!start && time === 0){
      setStart(false)
      const favicon = document.querySelector('[rel=icon]');
      favicon.href = "./favicon1.ico"
      myAudio.play();
    }
  })

  
  if (time > 0) {
    timeLeft = {
      minutes: Math.floor((time / 60)).toLocaleString('ru-RU', {minimumIntegerDigits: 2, useGrouping:false}),
      seconds: Math.floor(time % 60).toLocaleString('ru-RU', {minimumIntegerDigits: 2, useGrouping:false})
    }
  }

  useEffect(() => {
    const timeForTab = `${timeLeft.minutes}:${timeLeft.seconds}`
    document.title = `${time ? timeForTab : 'Пора отдохнуть'}`
  })
  
  let myAudio = new Audio (song)

  function stopSound() {
    myAudio.pause();
  }

  function startHandler () {
    setStart(prev => !prev)
  }

  return (
    <>
      {!!time && <TimeLeft minutes={timeLeft.minutes} seconds={timeLeft.seconds}/>}
      {!time && <Message />}
      <div className='btnBlock'>
      {!start ? 
      <button className="custom-btn btn-start" onClick={startHandler}>Начать</button> :
      <button className="custom-btn btn-start" onClick={startHandler}>Стоп</button>}
      </div>
    </>
  )
}
