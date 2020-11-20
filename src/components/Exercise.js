import React, { useState } from 'react'
import Task from './Task'

export default function Exercise({ words }) {
  const [currentTask, setCurrentTask] = useState(0)

  function onSolution() {
    if (currentTask < words.length - 1) {
      setCurrentTask(currentTask + 1)
    } else {
      setCurrentTask(0)
    }
  }
  return <Task onSolution={onSolution} word={words[currentTask]} />
}
