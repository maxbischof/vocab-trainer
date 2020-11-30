import React, { useState } from 'react'
import Task from './Task'
import { useParams } from 'react-router-dom'
import Evaluation from './Evaluation'
import { useTest } from '../../hooks/firebase'
import styled from 'styled-components'
import NameForm from './NameForm'

export default function Test({ db }) {
  const { testID } = useParams()
  const [currentTask, setCurrentTask] = useState(0)
  const [answers, setAnswers] = useState([])
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

  if (!name) {
    return (
      <StyledTest>
        <h1>Vokabeltest</h1>
        <NameForm setName={setName} />
      </StyledTest>
    )
  } else if (words && answers.length !== words.length) {
    return (
      <Task
        onSolution={openNextTask}
        word={words[currentTask]}
        addAnswer={addAnswer}
      />
    )
  } else if (words && answers.length === words.length) {
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

const StyledTest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
