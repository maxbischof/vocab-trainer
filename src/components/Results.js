import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

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
    <StyledResults>
      <h1>Alle Ergebnisse</h1>
      <Ul>
        {results &&
          results.map((result) => {
            return (
              <Li key={result.name + result.result}>
                {result.name}: {result.result}
              </Li>
            )
          })}
      </Ul>
    </StyledResults>
  )
}

const StyledResults = styled.div`
  text-align: center;
`
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: inline-block;
`
const Li = styled.li`
  padding: 10px;
  text-align: left;
`
