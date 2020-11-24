import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { evaluate } from '../lib/evaluation'

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
    <>
      <h2>
        Du hast {result} / {maxResult} Punkten erreicht.
      </h2>
      <Link to={'/results/' + testID}>
        <button type="button">Alle Ergebnisse ansehen</button>
      </Link>
    </>
  )
}
