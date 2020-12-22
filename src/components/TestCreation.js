import React, { useState } from 'react'
import styled from 'styled-components'
import TestCreated from './TestCreated'
import Button from './ui/Button'
import { createTest } from '../lib/firebase'
import List from './wordpair/List'
import Form from './wordpair/Form'
import GrammarMenu from './grammarmenu/GrammarMenu'

export default function TestCreation({ db }) {
  const [wordPairs, setWordPairs] = useState([])
  const [testURL, setTestURL] = useState()
  const [wordClass, setWordClass] = useState()
  const [gender, setGender] = useState()
  const [person, setPerson] = useState()
  const [number, setNumber] = useState()
  const [showGrammarMenu, setShowGrammarMenu] = useState(false)

  function addWordPair(wordPair) {
    if (wordClass || gender || person || number) wordPair.grammar = {}
    if (wordClass) wordPair.grammar.wordClass = wordClass
    if (gender) wordPair.grammar.gender = gender
    if (person) wordPair.grammar.person = person
    if (number) wordPair.grammar.number = number

    const wordPairsCopy = [...wordPairs]
    wordPairsCopy.push(wordPair)
    setWordPairs(wordPairsCopy)

    setGender()
    setNumber()
    setPerson()
    setWordClass()
  }

  function deleteWordPair(index) {
    const newWords = [...wordPairs]
    newWords.splice(index, 1)
    setWordPairs(newWords)
  }

  function changeWordClass(wordClass) {
    setWordClass(wordClass)
    setGender()
    setPerson()
    setNumber()
  }

  return (
    <>
      {testURL ? (
        <TestCreated testURL={testURL} />
      ) : (
        <StyledTestCreation>
          <BlurWrapper isBlured={showGrammarMenu}>
            <h1>Test erstellen</h1>
            {wordPairs.length > 0 && (
              <List words={wordPairs} deleteWord={deleteWordPair} />
            )}
            <StickyWrapper>
              <Form
                addWordPair={addWordPair}
                showGrammarMenu={setShowGrammarMenu}
              />
              <Button
                buttonstyle="primary"
                onClick={() => createTest(wordPairs, db, setTestURL)}
              >
                Test erstellen
              </Button>
            </StickyWrapper>
          </BlurWrapper>
          {showGrammarMenu && (
            <GrammarMenu
              wordClass={wordClass}
              setWordClass={changeWordClass}
              gender={gender}
              setGender={setGender}
              person={person}
              setPerson={setPerson}
              number={number}
              setNumber={setNumber}
              setShowGrammarMenu={setShowGrammarMenu}
            />
          )}
        </StyledTestCreation>
      )}
    </>
  )
}

const StyledTestCreation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StickyWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background);
  width: 100%;
  max-width: 600px;
`

const BlurWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isBlured &&
    `
    filter: blur(5px);
    pointer-events: none;
  `}
`
