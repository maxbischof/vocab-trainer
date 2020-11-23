import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Results() {
  const { testID } = useParams()
  const [results, setResults] = useState()

  useEffect(() => {
    Axios.get('/testresult/' + testID).then((response) =>
      setResults(response.data)
    )
  }, [testID])

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
