import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GenderMenu from './submenus/GenderMenu'
import NumberMenu from './submenus/NumberMenu'
import PersonMenu from './submenus/PersonMenu'

export default function GrammarSubMenus({
  wordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
}) {
  const [color, setColor] = useState()
  useEffect(() => {
    const colors = {
      Substantiv: 'var(--noun)',
      Adjektiv: 'var(--adjective)',
      Verb: 'var(--verb)',
    }
    setColor(colors[wordClass])
  }, [wordClass])

  return (
    <StyledGrammarSubMenus>
      {wordClass === 'Substantiv' && (
        <GenderMenu gender={gender} setGender={setGender} color={color} />
      )}
      {wordClass === 'Adjektiv' && (
        <>
          <GenderMenu gender={gender} setGender={setGender} color={color} />
          <NumberMenu number={number} setNumber={setNumber} color={color} />
        </>
      )}
      {wordClass === 'Verb' && (
        <>
          <PersonMenu person={person} setPerson={setPerson} color={color} />
          <NumberMenu number={number} setNumber={setNumber} color={color} />
        </>
      )}
    </StyledGrammarSubMenus>
  )
}

const StyledGrammarSubMenus = styled.div`
  position: relative;
  grid-row: 2/3;
  grid-column: 1/3;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`
