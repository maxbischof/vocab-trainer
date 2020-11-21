import React, { useState } from 'react'

export default function TestCreator() {
  const [words, setWords] = useState([])
  const [formInput, setFormInput] = useState({})

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

  return (
    <>
      {words.map((word) => (
        <p>
          {word.foreign} = {word.native}
        </p>
      ))}
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
