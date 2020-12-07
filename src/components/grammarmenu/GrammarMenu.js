import React from 'react'
import styled from 'styled-components'
import GrammarSubMenus from './GrammarSubMenus'
import CircleButton from './CircleButton'

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
        <CircleButton
          text="N"
          activeProperty={wordClass}
          color="var(--noun)"
          diameter="109.24px"
          onClick={setWordClass}
        />

        <CircleButton
          text="A"
          activeProperty={wordClass}
          color="var(--adjective)"
          diameter="109.24px"
          onClick={setWordClass}
        />

        <CircleButton
          text="V"
          activeProperty={wordClass}
          color="var(--verb)"
          diameter="109.24px"
          onClick={setWordClass}
        />
      </StyledGrammarMenu>
    </>
  )
}

const StyledGrammarMenu = styled.div`
  position: relative;
  background-color: white;

  > div {
    position: absolute;
  }

  > :nth-child(2) {
    top: 92px;
  }

  > :nth-child(3) {
    top: 49.74px;
    left: -75px;
  }
`
