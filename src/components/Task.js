import React, { useState } from 'react'
import styled from 'styled-components'
import { evaluate } from '../lib/evaluation'

export default function Task({ word, onSolution, addAnswer }) {
  const [backgroundColor, setBackgroundColor] = useState()
  const [userInput, setUserInput] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    addAnswer(userInput)

    if (evaluate(userInput, word.foreign) > 0) {
      setBackgroundColor('var(--success)')
    } else {
      setBackgroundColor('var(--error)')
    }
    setTimeout(() => {
      setBackgroundColor('var(--background)')
    }, 1000)
    onSolution()
    setUserInput('')
  }

  return (
    <TaskContainer backgroundColor={backgroundColor}>
      <h2>{word.native}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="userTranslation"
          placeholder="Übersetze auf Französisch"
          onBlur={onSubmit}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
        ></input>
      </form>
    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  height: 100vh;
  width: 100vw;
  padding: 50px;
  ${(props) =>
    props.backgroundColor === 'var(--background)' &&
    'transition: background 1s ease-out;'}
`
