import React from 'react'
import styled from 'styled-components'
import GrammarSubMenus from './GrammarSubMenus'
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
      <GrammarSubMenus
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
  align-items: center;
  height: 93px;
  width: 95vw;
  max-width: 400px;
`
