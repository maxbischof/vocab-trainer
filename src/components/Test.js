import React, { useState } from 'react'
import Task from './Task'
import { useParams } from 'react-router-dom'
import Evaluation from './Evaluation'
import { useTest } from '../hooks/firebase'

export default function Test({ db }) {
  const { testID } = useParams()
  const [currentTask, setCurrentTask] = useState(0)
  const [answers, setAnswers] = useState([])
  const [nameFormInput, setNameFormInput] = useState()
  const [name, setName] = useState()
  const words = useTest(db, testID)

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

  function onSubmitName(event) {
    event.preventDefault()
    setName(nameFormInput)
  }

  if (!name) {
    return (
      <form onSubmit={onSubmitName}>
        <input
          type="text"
          placeholder="Bitte Namen eingeben"
          onChange={(event) => setNameFormInput(event.target.value)}
        ></input>
      </form>
    )
  } else if (words && answers.length !== words.length) {
    return (
      <Task
        onSolution={openNextTask}
        word={words[currentTask]}
        addAnswer={addAnswer}
      />
    )
  } else if (answers.length === words.length) {
    return (
      <Evaluation
        words={words}
        answers={answers}
        name={name}
        testID={testID}
        db={db}
      />
    )
  } else {
    return <p>Loading...</p>
  }
}
