import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

export default function PersonSubMenu({ person, setPerson, color }) {
  return (
    <StyledPersonSubMenu>
      <CircleButton
        text="1."
        color={color}
        diameter="56px"
        activeProperty={person}
        onClick={setPerson}
      />
      <CircleButton
        text="2."
        color={color}
        diameter="56px"
        activeProperty={person}
        onClick={setPerson}
      />
      <CircleButton
        text="3."
        color={color}
        diameter="56px"
        activeProperty={person}
        onClick={setPerson}
      />
    </StyledPersonSubMenu>
  )
}

const StyledPersonSubMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

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
