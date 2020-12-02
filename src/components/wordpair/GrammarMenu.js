import React, { useState } from 'react'
import styled from 'styled-components'
import GrammarSubMenu from './GrammarSubMenu'
import Selection from './Selection'

export default function GrammarMenu({
  wordClass,
  setWordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
}) {
  return (
    <>
      <GrammarSubMenu
        wordClass={wordClass}
        gender={gender}
        setGender={setGender}
        person={person}
        setPerson={setPerson}
        number={number}
        setNumber={setNumber}
      />
      <StyledGrammarMenu>
        <Selection
          text="N"
          activeProperty={wordClass}
          color="var(--noun)"
          diameter="63px"
          onClick={setWordClass}
        />

        <Selection
          text="A"
          activeProperty={wordClass}
          color="var(--adjective)"
          diameter="63px"
          onClick={setWordClass}
        />

        <Selection
          text="V"
          activeProperty={wordClass}
          color="var(--verb)"
          diameter="63px"
          onClick={setWordClass}
        />
      </StyledGrammarMenu>
    </>
  )
}

const StyledGrammarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95vw;
`
