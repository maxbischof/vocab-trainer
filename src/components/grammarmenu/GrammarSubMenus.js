import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GenderSubMenu from './submenus/GenderSubMenu'
import NumberSubMenu from './submenus/NumberSubMenu'
import PersonSubMenu from './submenus/PersonSubMenu'

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
        <GenderSubMenu gender={gender} setGender={setGender} color={color} />
      )}
      {wordClass === 'Adjektiv' && (
        <>
          <GenderSubMenu gender={gender} setGender={setGender} color={color} />
          <NumberSubMenu number={number} setNumber={setNumber} color={color} />
        </>
      )}
      {wordClass === 'Verb' && (
        <>
          <PersonSubMenu person={person} setPerson={setPerson} color={color} />
          <NumberSubMenu number={number} setNumber={setNumber} color={color} />
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
