import React from 'react'
import styled from 'styled-components'
import GrammarSubMenus from './GrammarSubMenus'
import CircleButton from './CircleButton'
import { ReactComponent as CloseIcon } from '../../icons/delete.svg'

export default function GrammarMenu({
  wordClass,
  setWordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
  setShowGrammarMenu,
}) {
  return (
    <MenusWrapper>
      <StyledCloseIcon onClick={() => setShowGrammarMenu(false)} />
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

const MenusWrapper = styled.div`
  display: relative;
`

const StyledCloseIcon = styled(CloseIcon)`
  transform: translate(120px, -120px);
  cursor: pointer;
  position: absolute;
`
