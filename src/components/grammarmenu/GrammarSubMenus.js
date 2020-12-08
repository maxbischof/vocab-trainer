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
      N: 'var(--noun)',
      A: 'var(--adjective)',
      V: 'var(--verb)',
    }
    setColor(colors[wordClass])
  }, [wordClass])

  return (
    <StyledGrammarSubMenus>
      {wordClass === 'N' && (
        <GenderSubMenu gender={gender} setGender={setGender} color={color} />
      )}
      {wordClass === 'A' && (
        <>
          <GenderSubMenu gender={gender} setGender={setGender} color={color} />
          <NumberSubMenu number={number} setNumber={setNumber} color={color} />
        </>
      )}
      {wordClass === 'V' && (
        <>
          <PersonSubMenu person={person} setPerson={setPerson} color={color} />
          <NumberSubMenu number={number} setNumber={setNumber} color={color} />
        </>
      )}
    </StyledGrammarSubMenus>
  )
}

const StyledGrammarSubMenus = styled.div`
  display: flex;
  height: 209px;
  position: absolute;
`
