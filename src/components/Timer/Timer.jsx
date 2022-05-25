import {useEffect, useState, useRef} from 'react';

import TimeLeft from '../TimeLeft/TimeLeft'

import './style.css'
import song from './s3.mp3'

export default function Timer() {

  const mounted = useRef(false)
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(2)
  
  const btn1 = useRef();
  const btn2 = useRef();
  const btn3 = useRef();

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
    const timeForTab = `${timeLeft.minutes}:${timeLeft.seconds} - Время для работы`
    document.title = `${time ? timeForTab : 'Время для перерыва'}`
  })
  
  let myAudio = new Audio (song)

  function stopSound() {
    myAudio.pause();
  }

  function startStopHandler () {
    setStart(prev => !prev)
  }

  function modeBtnHandler (e) {
    console.log(e.target.id);
    btn1.current.classList.remove('activeBtn')
    btn2.current.classList.remove('activeBtn')
    btn3.current.classList.remove('activeBtn')
    e.target.classList.add('activeBtn')

    if (e.target.id === 'mode1'){
      setStart(false)
      setTime(1500);
      document.body.style = 'background: #D95550;';
    }
    if (e.target.id === 'mode2'){
      setStart(false)
      setTime(300);
      document.body.style = 'background: #4C9195;';
    }
    if (e.target.id === 'mode3'){
      setStart(false)
      setTime(900);
      document.body.style = 'background: #457CA3;';
    }
  }

console.log(btn1);

  return (
    <>
      <div className='Main'>
        <div className='btnModeBlock'>
          <button id='mode1' ref={btn1} className="modeButton activeBtn" onClick={modeBtnHandler}>Pomodoro</button>
          <button id='mode2' ref={btn2} className="modeButton" onClick={modeBtnHandler}>Короткий перерыв</button>
          <button id='mode3' ref={btn3} className="modeButton" onClick={modeBtnHandler}>Длинный перерыв</button>
        </div>

        {<TimeLeft minutes={timeLeft.minutes} seconds={timeLeft.seconds}/>}

        <div className='btnStartStopBlock'>
          <button className="button" onClick={startStopHandler}>{start ? 'Стоп' : 'Начать'}</button>
        </div>
      </div>
    </>
  )
}
