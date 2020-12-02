import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'

export default function GrammarMenu() {
  return (
    <StyledGrammarMenu>
      <Selection
        text="N"
        active={false}
        color="rgba(43, 173, 134, 1)"
        diameter="63px"
      />
      <Selection
        text="A"
        active={false}
        color="rgba(255, 51, 210, 1)"
        diameter="63px"
      />
      <Selection
        text="V"
        active={false}
        color="rgba(255, 222, 51, 1)"
        diameter="63px"
      />
    </StyledGrammarMenu>
  )
}

const StyledGrammarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95vw;
`
