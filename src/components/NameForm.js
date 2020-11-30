import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './ui/Button'
import Input from './ui/Input'

export default function NameForm({ setName }) {
  const [nameFormInput, setNameFormInput] = useState()

  function onSubmitName(event) {
    event.preventDefault()
    setName(nameFormInput)
  }

  return (
    <Form onSubmit={onSubmitName}>
      <Input
        type="text"
        placeholder="Bitte Namen eingeben"
        onChange={(event) => setNameFormInput(event.target.value)}
      ></Input>
      <Button>Test starten</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
