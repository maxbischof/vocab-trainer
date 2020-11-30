import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import Input from './ui/Input'
import Button from './ui/Button'

export default function WordPairForm({ wordPairs, setWordPairs }) {
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
    <Form onSubmit={onSubmit}>
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
      <Button type="submit">Add word</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--text);
  border-radius: 10px;
  padding: 10px;
`
