import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

export default function NumberSubMenu({ number, setNumber, color }) {
  return (
    <StyledNumberSubMenu>
      <CircleButton
        text="Sg"
        color={color}
        diameter="56px"
        activeProperty={number}
        onClick={setNumber}
      />
      <CircleButton
        text="Pl"
        color={color}
        diameter="56px"
        activeProperty={number}
        onClick={setNumber}
      />
    </StyledNumberSubMenu>
  )
}

const StyledNumberSubMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;
  }
  > :nth-child(1) {
    transform: rotate(230deg) translate(95px) rotate(-230deg);
  }

  > :nth-child(2) {
    transform: rotate(190deg) translate(95px) rotate(-190deg);
  }
`
