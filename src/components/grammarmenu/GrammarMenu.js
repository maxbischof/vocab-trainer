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

const MenusWrapper = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr;
  grid-template-columns: 1fr auto;
  justify-items: center;
  align-items: center;
  position: sticky;
  bottom: 20px;
  width: 250px;
  height: 250px;
`
const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  grid-row: 1/2;
  grid-column: 2/3;
`
