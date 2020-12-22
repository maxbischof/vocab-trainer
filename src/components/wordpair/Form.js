import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { ReactComponent as WordClassSVG } from '../../icons/wordClass.svg'

export default function Form({ addWordPair, showGrammarMenu }) {
  const [formInput, setFormInput] = useState({ foreign: '', native: '' })
  const [validationError, setValidationError] = useState()

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

    addWordPair(formInput)

    setFormInput({ foreign: '', native: '' })
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  return (
    <>
      <GrammarMenuButton onClick={() => showGrammarMenu(true)} />
      <StyledForm onSubmit={onSubmit}>
        <Input
          name="foreign"
          type="text"
          placeholder="Fremdsprache"
          onChange={onChange}
          value={formInput.foreign}
          error={validationError}
        />
        <Input
          name="native"
          type="text"
          placeholder="Deutsch"
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

const GrammarMenuButton = styled(WordClassSVG)`
  cursor: pointer;
`
