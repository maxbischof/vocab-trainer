import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function Form({
  wordPairs,
  setWordPairs,
  isBlured,
  gender,
  person,
  number,
  setGender,
  setNumber,
  setPerson,
  setWordClass,
}) {
  const [formInput, setFormInput] = useState({ foreign: '', native: '' })
  const [validationError, setValidationError] = useState()

  const foreignInput = createRef()

  function onSubmit(event) {
    event.preventDefault()
    setValidationError()

    if (!formInput.foreign) {
      setValidationError('foreign')
      return
    }

    if (!formInput.native) {
      setValidationError('native')
      return
    }

    if (gender) formInput.gender = gender
    if (person) formInput.person = person
    if (number) formInput.number = number

    const wordPairsCopy = [...wordPairs]
    wordPairsCopy.push(formInput)
    setWordPairs(wordPairsCopy)

    setFormInput({ foreign: '', native: '' })
    setGender()
    setNumber()
    setPerson()
    setWordClass()
    foreignInput.current.focus()
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  return (
    <>
      <StyledForm onSubmit={onSubmit} isBlured={isBlured}>
        <Input
          name="foreign"
          type="text"
          placeholder="Foreign"
          onChange={onChange}
          value={formInput.foreign}
          ref={foreignInput}
          error={validationError}
        />
        <Input
          name="native"
          type="text"
          placeholder="Native"
          onChange={onChange}
          value={formInput.native}
          error={validationError}
        />
        <Button type="submit" buttonstyle="secondary">
          Wortpaar hinzufügen
        </Button>
      </StyledForm>
    </>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background);
  width: 100%;
`
