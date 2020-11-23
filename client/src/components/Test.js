import React, { useEffect, useState } from 'react'
import Task from './Task'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Evaluation from './Evaluation'

export default function Test() {
  const [currentTask, setCurrentTask] = useState(0)
  const { testID } = useParams()
  const [words, setWords] = useState()
  const [answers, setAnswers] = useState([])

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

  function addAnswer(answer) {
    const newAnswers = [...answers]
    newAnswers.push(answer)
    setAnswers(newAnswers)
  }

  if (words && answers.length !== words.length) {
    return (
      <Task
        onSolution={openNextTask}
        word={words[currentTask]}
        addAnswer={addAnswer}
      />
    )
  } else if (words && answers.length === words.length) {
    return <Evaluation words={words} answers={answers} />
  } else {
    return <p>Loading...</p>
  }
}
