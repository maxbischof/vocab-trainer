import React, { useState } from 'react'
import styled from 'styled-components'
import GrammarSubMenu from './GrammarSubMenu'
import Selection from './Selection'

export default function GrammarMenu() {
  const [wordClass, setWordClass] = useState('N')

  return (
    <>
      {wordClass === 'N' && <GrammarSubMenu wordClass={wordClass} />}
      {wordClass === 'A' && <GrammarSubMenu wordClass={wordClass} />}
      {wordClass === 'V' && <GrammarSubMenu wordClass={wordClass} />}
      <StyledGrammarMenu>
        <Selection
          text="N"
          active={false}
          color="rgba(43, 173, 134, 1)"
          diameter="63px"
          onClick={setWordClass}
        />

        <Selection
          text="A"
          active={false}
          color="rgba(255, 51, 210, 1)"
          diameter="63px"
          onClick={setWordClass}
        />

        <Selection
          text="V"
          active={false}
          color="rgba(255, 222, 51, 1)"
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
