import React, { useState } from 'react'
import styled from 'styled-components'
import TestLink from './TestLink'
import Button from './ui/Button'
import Input from './ui/Input'

export default function TestCreator({ db }) {
  const [words, setWords] = useState([])
  const [formInput, setFormInput] = useState({ foreign: '', native: '' })
  const [testURL, setTestURL] = useState()

  function onSubmit(event) {
    event.preventDefault()
    const newWords = [...words]
    newWords.push(formInput)
    setWords(newWords)
    setFormInput({ foreign: '', native: '' })
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  async function createTest() {
    let isUnique = false
    let i = 0

    while (isUnique === false && i < 10) {
      const testID = Math.floor(Math.random() * 1000000).toString()
      i++
      console.log('try')
      isUnique = await db
        .collection('tests')
        .doc(testID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return false
          } else {
            return true
          }
        })

      isUnique && addToFirebase(words, testID)
    }
  }

  function addToFirebase(words, testID) {
    db.collection('tests')
      .doc(testID)
      .set({ words })
      .then(() => {
        setTestURL('/tests/' + testID)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

  console.log(window.location.host)

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
              <Button onClick={createTest}>Test erstellen</Button>
              <Ul>
                {words.map((word) => (
                  <Li key={word.foreign}>
                    <b>{word.foreign}</b>
                    <small>{word.native}</small>
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

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid var(--text);
  display: flex;
  flex-direction: column;
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
