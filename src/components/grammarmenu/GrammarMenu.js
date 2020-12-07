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
    /* transform: rotate($rot * 1deg) translate($circle-size / 2)
      rotate($rot * -1deg); */
    transform: rotate(60deg) translate(100px) rotate(-60deg);
  }

  > :nth-child(3) {
    transform: rotate(120deg) translate(100px) rotate(-120deg);
  }
`
