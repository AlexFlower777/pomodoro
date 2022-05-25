import React from 'react'
import './style.css'

export default function Message({text}) {
  return (
    <p>{text}</p>
  )
}

Message.defaultProps = {
  text: 'Пора отдохнуть'
}
