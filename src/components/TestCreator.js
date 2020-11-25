import React, { useState } from 'react'

export default function TestCreator({ db }) {
  const [words, setWords] = useState([])
  const [formInput, setFormInput] = useState({})
  const [testURL, setTestURL] = useState()

  function onSubmit(event) {
    event.preventDefault()
    const newWords = [...words]
    newWords.push(formInput)
    setWords(newWords)
  }

  function onChange(event) {
    const language = event.target.name
    const newFormInput = { ...formInput }
    newFormInput[language] = event.target.value
    setFormInput(newFormInput)
  }

  function createTest() {
    db.collection('tests')
      .add({ words })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
        setTestURL(docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }

  return (
    <>
      <h2>Test-URL: /tests/{testURL}</h2>
      {words.map((word) => (
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
