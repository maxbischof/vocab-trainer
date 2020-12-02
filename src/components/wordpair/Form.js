import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import Input from '../ui/Input'
import Button from '../ui/Button'
import GrammarMenu from './GrammarMenu'

export default function Form({ wordPairs, setWordPairs }) {
  const [formInput, setFormInput] = useState({ foreign: '', native: '' })
  const foreignInput = createRef()

  function onSubmit(event) {
    event.preventDefault()
    const newWords = [...wordPairs]
    newWords.push(formInput)
    setWordPairs(newWords)
    setFormInput({ foreign: '', native: '' })
    foreignInput.current.focus()
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        name="foreign"
        type="text"
        placeholder="Foreign"
        onChange={onChange}
        value={formInput.foreign}
        ref={foreignInput}
      />
      <Input
        name="native"
        type="text"
        placeholder="Native"
        onChange={onChange}
        value={formInput.native}
      />
      <GrammarMenu />
      <Button type="submit">Add word</Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
