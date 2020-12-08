import React, { createRef, useState } from 'react'
import styled from 'styled-components'
import Input from '../ui/Input'
import Button from '../ui/Button'
import GrammarMenu from '../grammarmenu/GrammarMenu'
import { ReactComponent as WordClassSVG } from '../../icons/wordClass.svg'

export default function Form({ wordPairs, setWordPairs }) {
  const [showGrammarMenu, setShowGrammarMenu] = useState(false)
  const [formInput, setFormInput] = useState({ foreign: '', native: '' })
  const [wordClass, setWordClass] = useState()
  const [gender, setGender] = useState()
  const [person, setPerson] = useState()
  const [number, setNumber] = useState()

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
    <>
      <StyledForm onSubmit={onSubmit} isBlured={showGrammarMenu}>
        <StyledWordClassSVG
          onClick={() => setShowGrammarMenu(!showGrammarMenu)}
        />
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
      </StyledForm>
      {showGrammarMenu && (
        <GrammarMenu
          wordClass={wordClass}
          setWordClass={setWordClass}
          gender={gender}
          setGender={setGender}
          person={person}
          setPerson={setPerson}
          number={number}
          setNumber={setNumber}
          setShowGrammarMenu={setShowGrammarMenu}
        />
      )}
    </>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  ${(props) =>
    props.isBlured &&
    `
      filter: blur(2px); 
      pointer-events: none;
    `}
`

const StyledWordClassSVG = styled(WordClassSVG)`
  cursor: pointer;
`
