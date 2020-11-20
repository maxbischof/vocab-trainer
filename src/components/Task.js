import React, { useState } from 'react'
import styled from 'styled-components'

export default function Task({ word, onSolution }) {
  const [backgroundColor, setBackgroundColor] = useState()

  function onSubmit(event) {
    event.preventDefault()
    const userTranslation = event.target.userTranslation.value.toLowerCase()
    if (userTranslation === word.fields.germanword.toLowerCase()) {
      setBackgroundColor('var(--success)')
    } else {
      setBackgroundColor('var(--error)')
    }
    setTimeout(() => {
      setBackgroundColor('white')
    }, 1000)
    onSolution()
    event.target.userTranslation.value = ''
  }

  return (
    <TaskContainer backgroundColor={backgroundColor}>
      <h2>{word.fields.foreignword}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="userTranslation"
          placeholder="Übersetze auf Deutsch"
        ></input>
      </form>
    </TaskContainer>
  )
}

const TaskContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  height: 100vh;
  width: 100vw;
  padding 50px;
  ${(props) =>
    props.backgroundColor === 'white' && 'transition: background 1s ease-out;'}
`
