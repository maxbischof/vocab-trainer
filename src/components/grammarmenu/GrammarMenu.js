import React from 'react'
import styled from 'styled-components'
import GrammarSubMenus from './GrammarSubMenus'
import CircleButton from './CircleButton'

export default function GrammarMenu({
  wordClass,
  setWordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
}) {
  return (
    <MenusWrapper>
      <GrammarSubMenus
        wordClass={wordClass}
        gender={gender}
        setGender={setGender}
        person={person}
        setPerson={setPerson}
        number={number}
        setNumber={setNumber}
      />
      <StyledGrammarMenu activeButton={wordClass}>
        <CircleButton
          text="N"
          activeProperty={wordClass}
          color="var(--noun)"
          diameter="109.24px"
          onClick={setWordClass}
        />

        <CircleButton
          text="A"
          activeProperty={wordClass}
          color="var(--adjective)"
          diameter="109.24px"
          onClick={setWordClass}
        />

        <CircleButton
          text="V"
          activeProperty={wordClass}
          color="var(--verb)"
          diameter="109.24px"
          onClick={setWordClass}
        />
      </StyledGrammarMenu>
    </MenusWrapper>
  )
}

const StyledGrammarMenu = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;
    transition: 1s all;
  }

  > :nth-child(1) {
    ${(props) =>
      props.activeButton !== 'N' && props.activeButton && 'display: none;'}
    ${(props) => !props.activeButton && 'transform: translate(0px, -42.5px);'}
  }

  > :nth-child(2) {
    ${(props) =>
      props.activeButton !== 'A' && props.activeButton && 'display: none;'}
    ${(props) => !props.activeButton && 'transform: translate(50px, 42.5px);'}
  }

  > :nth-child(3) {
    ${(props) =>
      props.activeButton !== 'V' && props.activeButton && 'display: none;'}
    ${(props) => !props.activeButton && 'transform: translate(-50px, 42.5px);'}
  }
`

const MenusWrapper = styled.div`
  display: relative;
  border: 1px solid red;
`
