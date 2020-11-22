import React, { useState } from 'react'
import axios from 'axios'

export default function TestCreator() {
  const [words, setWords] = useState({ words: [] })
  const [formInput, setFormInput] = useState({})
  const [testURL, setTestURL] = useState()

  function onSubmit(event) {
    event.preventDefault()
    const newWords = {}
    newWords.words = [...words.words]
    newWords.words.push(formInput)
    setWords(newWords)
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  function createTest() {
    axios.post('/test', words).then((res) => setTestURL(res.data))
  }

  return (
    <>
      <h2>Test-URL: /test/{testURL}</h2>
      {words.words.map((word) => (
        <p key={word.foreign}>
          {word.foreign} = {word.native}
        </p>
      ))}
      <button onClick={createTest}>Test erstellen</button>
      <form onSubmit={onSubmit}>
        <input
          name="foreign"
          type="text"
          placeholder="Fremdsprache"
          onChange={onChange}
        />
        <input
          name="native"
          type="text"
          placeholder="Deutsch"
          onChange={onChange}
        />
        <button type="submit">Wortpaar hinzufügen</button>
      </form>
    </>
  )
}
