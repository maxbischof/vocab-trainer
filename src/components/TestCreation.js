import React, { useState } from 'react'
import styled from 'styled-components'
import TestLink from './TestCreated'
import Button from './ui/Button'
import { createTest } from '../lib/firebase'
import List from './wordpair/List'
import Form from './wordpair/Form'

export default function TestCreation({ db }) {
  const [wordPairs, setWordPairs] = useState([])
  const [testURL, setTestURL] = useState()

  function deleteWord(index) {
    const newWords = [...wordPairs]
    newWords.splice(index, 1)
    setWordPairs(newWords)
  }

  return (
    <>
      {testURL ? (
        <TestLink testURL={testURL} />
      ) : (
        <StyledTestCreation>
          <h1>Test erstellen</h1>
          {wordPairs.length > 0 && (
            <TestPreview>
              <List words={wordPairs} deleteWord={deleteWord} />
            </TestPreview>
          )}
          <StickyWrapper>
            <Form wordPairs={wordPairs} setWordPairs={setWordPairs} />
            <Button
              buttonstyle="primary"
              onClick={() => createTest(wordPairs, db, setTestURL)}
            >
              Test erstellen
            </Button>
          </StickyWrapper>
        </StyledTestCreation>
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
  padding-bottom: 10px;
`
