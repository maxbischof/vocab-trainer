import React, { useState } from 'react'
import styled from 'styled-components'
import TestLink from './TestCreated'
import Button from './ui/Button'
import { createTest } from '../lib/firebase'
import List from './wordpair/List'
import Form from './wordpair/Form'
import GrammarMenu from './grammarmenu/GrammarMenu'
import { ReactComponent as WordClassSVG } from '../icons/wordClass.svg'

export default function TestCreation({ db }) {
  const [wordPairs, setWordPairs] = useState([])
  const [testURL, setTestURL] = useState()
  const [wordClass, setWordClass] = useState()
  const [gender, setGender] = useState()
  const [person, setPerson] = useState()
  const [number, setNumber] = useState()
  const [showGrammarMenu, setShowGrammarMenu] = useState(false)

  function deleteWord(index) {
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
        <TestLink testURL={testURL} />
      ) : (
        <StyledTestCreation>
          <BlurWrapper isBlured={showGrammarMenu}>
            <h1>Test erstellen</h1>
            {wordPairs.length > 0 && (
              <List words={wordPairs} deleteWord={deleteWord} />
            )}
            <StickyWrapper>
              <StyledWordClassSVG
                onClick={() => setShowGrammarMenu(!showGrammarMenu)}
              />
              <Form wordPairs={wordPairs} setWordPairs={setWordPairs} />
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

const StyledWordClassSVG = styled(WordClassSVG)`
  cursor: pointer;
`
