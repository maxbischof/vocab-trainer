import React from 'react'
import styled from 'styled-components'
import WordPair from './WordPair'

export default function WordpairList({ words, deleteWord }) {
  return (
    <Ul>
      {words.map((word, index) => (
        <WordPair word={word} index={index} deleteWord={deleteWord} />
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`
