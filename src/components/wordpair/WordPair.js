import React from 'react'
import styled from 'styled-components'
import { ReactComponent as DeleteSVG } from '../../icons/delete.svg'

export default function WordPair({ word, deleteWord, index }) {
  return (
    <StyledWordpair key={word.foreign}>
      <Words>
        <b>{word.foreign}</b>
        <small>{word.native}</small>
      </Words>
      <DeleteIcon onClick={() => deleteWord(index)} />
    </StyledWordpair>
  )
}

const StyledWordpair = styled.li`
  padding: 10px;
  border-bottom: 1px solid var(--text);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  :last-child {
    border-bottom: none;
  }
`

const Words = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
`

const DeleteIcon = styled(DeleteSVG)`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: grid;
  align-items: center;
  margin: 0 0 0 25px;
`
