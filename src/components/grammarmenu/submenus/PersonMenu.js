import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

export default function PersonMenu({ person, setPerson, color }) {
  return (
    <StyledPersonMenu>
      <CircleButton
        text="1. Person"
        color={color}
        diameter="56px"
        activeProperty={person}
        onClick={setPerson}
      />
      <CircleButton
        text="2. Person"
        color={color}
        diameter="56px"
        activeProperty={person}
        onClick={setPerson}
      />
      <CircleButton
        text="3. Person"
        color={color}
        diameter="56px"
        activeProperty={person}
        onClick={setPerson}
      />
    </StyledPersonMenu>
  )
}

const StyledPersonMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/1;
  grid-column: 1/1;

  > div {
    position: absolute;
  }
  > :nth-child(1) {
    transform: rotate(310deg) translate(95px) rotate(-310deg);
  }

  > :nth-child(2) {
    transform: rotate(350deg) translate(95px) rotate(-350deg);
  }

  > :nth-child(3) {
    transform: rotate(30deg) translate(95px) rotate(-30deg);
  }
`
