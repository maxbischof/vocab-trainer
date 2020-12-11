import React from 'react'
import styled from 'styled-components'
import WordPair from './WordPair'

export default function List({ words, deleteWord }) {
  return (
    <StyledWordPairList>
      {words.map((word, index) => (
        <WordPair
          word={word}
          index={index}
          deleteWord={deleteWord}
          key={word.foreign}
        />
      ))}
    </StyledWordPairList>
  )
}

const StyledWordPairList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  justify-items: center;
`
