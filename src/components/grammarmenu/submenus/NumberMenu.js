import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

export default function NumberMenu({ number, setNumber, color }) {
  return (
    <StyledNumberMenu>
      <CircleButton
        text="Singular"
        color={color}
        diameter="56px"
        activeProperty={number}
        onClick={setNumber}
      />
      <CircleButton
        text="Plural"
        color={color}
        diameter="56px"
        activeProperty={number}
        onClick={setNumber}
      />
    </StyledNumberMenu>
  )
}

const StyledNumberMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/1;
  grid-column: 1/1;

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
