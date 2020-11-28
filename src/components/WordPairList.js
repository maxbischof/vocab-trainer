import React from 'react'
import styled from 'styled-components'
import { ReactComponent as DeleteIcon } from '../icons/delete.svg'

export default function WordpairList({ words, deleteWord }) {
  return (
    <Ul>
      {words.map((word, index) => (
        <Li key={word.foreign}>
          <Wordpair>
            <b>{word.foreign}</b>
            <small>{word.native}</small>
          </Wordpair>
          <Icons>
            <DeleteIcon onClick={() => deleteWord(index)} />
          </Icons>
        </Li>
      ))}
    </Ul>
  )
}

const Wordpair = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
`

const Icons = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: grid;
  align-items: center;
  margin: 0 0 0 25px;
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Li = styled.li`
  padding: 10px;
  border-bottom: 1px solid var(--text);
  display: grid;
  grid-template-columns: auto 40px;
`
