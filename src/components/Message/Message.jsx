import React from 'react'

export default function Message({text}) {
  return (
    <h3>{text}</h3>
  )
}

Message.defaultProps = {
  text: 'Пора отдохнуть'
}
