import React from 'react'
import styled from 'styled-components'
import AdjectiveMenu from './submenus/AdjectiveMenu'
import NounMenu from './submenus/NounMenu'
import VerbMenu from './submenus/VerbMenu'

export default function GrammarSubMenus({
  wordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
}) {
  return (
    <GrammarSubMenu>
      {wordClass === 'N' && <NounMenu gender={gender} setGender={setGender} />}
      {wordClass === 'A' && (
        <AdjectiveMenu
          gender={gender}
          setGender={setGender}
          number={number}
          setNumber={setNumber}
        />
      )}
      {wordClass === 'V' && (
        <VerbMenu
          number={number}
          setNumber={setNumber}
          person={person}
          setPerson={setPerson}
        />
      )}
    </GrammarSubMenu>
  )
}

const GrammarSubMenu = styled.div`
  display: flex;
  height: 209px;
`
