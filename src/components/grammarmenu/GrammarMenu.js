import React from 'react'
import styled from 'styled-components'
import GrammarSubMenus from './GrammarSubMenus'
import { ReactComponent as CloseIcon } from '../../icons/delete.svg'
import WordClassMenu from './WordClassMenu'

export default function GrammarMenu({
  wordClass,
  setWordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
  setShowGrammarMenu,
}) {
  return (
    <>
      <StyledGrammarMenu>
        <StyledCloseIcon onClick={() => setShowGrammarMenu(false)} />
        <GrammarSubMenus
          wordClass={wordClass}
          gender={gender}
          setGender={setGender}
          person={person}
          setPerson={setPerson}
          number={number}
          setNumber={setNumber}
        />
        <WordClassMenu wordClass={wordClass} setWordClass={setWordClass} />
      </StyledGrammarMenu>
    </>
  )
}

const StyledGrammarMenu = styled.div`
  display: grid;
  background: var(--background);
  grid-template-rows: 20px 1fr;
  grid-template-columns: 1fr auto;
  justify-items: center;
  align-items: center;
  position: absolute;
  padding: 20px 0 20px 0;
  width: 250px;
  height: 190px;
`
const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  grid-row: 1/2;
  grid-column: 2/3;
`
