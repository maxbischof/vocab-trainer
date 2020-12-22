import React from 'react'
import styled from 'styled-components'
import CircleButton from './CircleButton'

export default function WordClassMenu({ wordClass, setWordClass }) {
  return (
    <StyledWordClassMenu activeButton={wordClass}>
      <CircleButton
        text="Substantiv"
        activeProperty={wordClass}
        color="var(--noun)"
        diameter="109.24px"
        onClick={setWordClass}
      />

      <CircleButton
        text="Adjektiv"
        activeProperty={wordClass}
        color="var(--adjective)"
        diameter="109.24px"
        onClick={setWordClass}
      />

      <CircleButton
        text="Verb"
        activeProperty={wordClass}
        color="var(--verb)"
        diameter="109.24px"
        onClick={setWordClass}
      />
    </StyledWordClassMenu>
  )
}

const StyledWordClassMenu = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;
    transition: 1s all;
  }

  > :nth-child(1) {
    ${(props) =>
      props.activeButton !== 'Substantiv' &&
      props.activeButton &&
      'display: none;'}
    ${(props) => !props.activeButton && 'transform: translate(0px, -42.5px);'}
  }

  > :nth-child(2) {
    ${(props) =>
      props.activeButton !== 'Adjektiv' &&
      props.activeButton &&
      'display: none;'}
    ${(props) => !props.activeButton && 'transform: translate(50px, 42.5px);'}
  }

  > :nth-child(3) {
    ${(props) =>
      props.activeButton !== 'Verb' && props.activeButton && 'display: none;'}
    ${(props) => !props.activeButton && 'transform: translate(-50px, 42.5px);'}
  }
`
