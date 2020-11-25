import React, { useState } from 'react'
import styled from 'styled-components'
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

  return (
    <Container>
      <h1>Test erstellen</h1>
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
        <button type="submit">Wortpaar hinzufügen</button>
        <button onClick={createTest}>Test erstellen</button>
        {words.map((word) => (
          <p key={word.foreign}>
            {word.foreign} = {word.native}
          </p>
        ))}
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
