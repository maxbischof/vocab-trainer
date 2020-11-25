import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Results({ db }) {
  const { testID } = useParams()
  const [results, setResults] = useState([])

  useEffect(() => {
    db.collection('tests')
      .doc(testID)
      .collection('results')
      .get()
      .then((results) => {
        const resultsArray = []
        results.forEach((result) =>
          resultsArray.push(result.data().resultObject)
        )
        setResults(resultsArray)
      })
  }, [testID, db])

  return (
    <>
      <h2>Results from Test {testID}</h2>
      {results &&
        results.map((result) => {
          return (
            <p key={result.name}>
              {result.name}: {result.result}
            </p>
          )
        })}
    </>
  )
}
