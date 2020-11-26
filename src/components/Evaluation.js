import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { evaluate } from '../lib/evaluation'
import Button from './ui/Button'

export default function Evaluation({ words, answers, name, testID, db }) {
  let result = 0
  const maxResult = words.length

  words.forEach((word, index) => {
    result += evaluate(word.foreign, answers[index])
  })

  useEffect(() => {
    const resultObject = { result: result, name: name }
    const resultsCollection = db
      .collection('tests')
      .doc(testID)
      .collection('results')

    resultsCollection
      .add({ resultObject })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }, [name, result, testID, db])

  return (
    <StyledEvaluation>
      <h1>Dein Ergebnis</h1>
      <p>
        Du hast{' '}
        <b>
          {result} / {maxResult}
        </b>{' '}
        Punkten erreicht.
      </p>
      <Link to={'/results/' + testID}>
        <Button>Alle Ergebnisse ansehen</Button>
      </Link>
    </StyledEvaluation>
  )
}

const StyledEvaluation = styled.div`
  text-align: center;
`
