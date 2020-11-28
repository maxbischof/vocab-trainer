import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import TestLink from './TestLink'
import Button from './ui/Button'
import Input from './ui/Input'
import { createTest } from '../lib/firebase'
import WordPairList from './WordPairList'

export default function TestCreator({ db }) {
  const [words, setWords] = useState([])
  const [formInput, setFormInput] = useState({ foreign: '', native: '' })
  const [testURL, setTestURL] = useState()
  const foreignInput = createRef()

  function onSubmit(event) {
    event.preventDefault()
    const newWords = [...words]
    newWords.push(formInput)
    setWords(newWords)
    setFormInput({ foreign: '', native: '' })
    foreignInput.current.focus()
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  function deleteWord(index) {
    const newWords = [...words]
    newWords.splice(index, 1)
    setWords(newWords)
  }

  return (
    <>
      {testURL ? (
        <TestLink testURL={testURL} />
      ) : (
        <StyledTestCreator>
          <h1>Test erstellen</h1>
          <h2>{testURL}</h2>
          <Form onSubmit={onSubmit}>
            <Input
              name="foreign"
              type="text"
              placeholder="Fremdsprache"
              onChange={onChange}
              value={formInput.foreign}
              ref={foreignInput}
            />
            <Input
              name="native"
              type="text"
              placeholder="Deutsch"
              onChange={onChange}
              value={formInput.native}
            />
            <Button type="submit">Wortpaar hinzufügen</Button>
          </Form>
          {words.length > 0 && (
            <TestPreview>
              <Button onClick={() => createTest(words, db, setTestURL)}>
                Test erstellen
              </Button>
              <WordPairList words={words} deleteWord={deleteWord} />
            </TestPreview>
          )}
        </StyledTestCreator>
      )}
    </>
  )
}

const TestPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--text);
  border-radius: 10px;
  padding: 10px;
  margin: 40px;
`

const StyledTestCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--text);
  border-radius: 10px;
  padding: 10px;
`
