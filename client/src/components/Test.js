import React, { useEffect, useState } from 'react'
import Task from './Task'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Test() {
  const [currentTask, setCurrentTask] = useState(0)
  const { testID } = useParams()
  const [words, setWords] = useState()

  useEffect(() => {
    axios
      .get('/test/' + testID)
      .then((response) => setWords(response.data.words))
  }, [testID])

  function openNextTask() {
    if (currentTask < words.length - 1) {
      setCurrentTask(currentTask + 1)
    } else {
      setCurrentTask(0)
    }
  }
  return words ? (
    <Task onSolution={openNextTask} word={words[currentTask]} />
  ) : (
    <p>Loading...</p>
  )
}
