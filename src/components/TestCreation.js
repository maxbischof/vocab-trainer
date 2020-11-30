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
        <StyledTestCreator>
          <h1>Test erstellen</h1>
          <Form wordPairs={wordPairs} setWordPairs={setWordPairs} />

          {wordPairs.length > 0 && (
            <TestPreview>
              <Button onClick={() => createTest(wordPairs, db, setTestURL)}>
                Test erstellen
              </Button>
              <List words={wordPairs} deleteWord={deleteWord} />
            </TestPreview>
          )}
        </StyledTestCreator>
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

const StyledTestCreator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
