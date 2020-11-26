import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import TestLink from './TestLink'
import Button from './ui/Button'
import Input from './ui/Input'
import { ReactComponent as DeleteIcon } from '../icons/delete.svg'
import { createTest } from '../lib/firebase'

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
              <Ul>
                {words.map((word, index) => (
                  <Li key={word.foreign}>
                    <Wordpair>
                      <b>{word.foreign}</b>
                      <small>{word.native}</small>
                    </Wordpair>
                    <Icons>
                      <DeleteIcon onClick={() => deleteWord(index)} />
                    </Icons>
                  </Li>
                ))}
              </Ul>
            </TestPreview>
          )}
        </StyledTestCreator>
      )}
    </>
  )
}
const Wordpair = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
`

const Icons = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: grid;
  align-items: center;
  margin: 0 0 0 25px;
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid var(--text);
  display: grid;
  grid-template-columns: auto 40px;
`

const StyledTestCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TestPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--text);
  border-radius: 10px;
  padding: 10px;
  margin: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--text);
  border-radius: 10px;
  padding: 10px;
`
