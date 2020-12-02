import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

export default function VerbMenu({ number, setNumber, person, setPerson }) {
  return (
    <>
      <Column>
        <CircleButton
          text="Sg"
          active={false}
          color="var(--singular)"
          diameter="43px"
          activeProperty={number}
          onClick={setNumber}
        />
        <CircleButton
          text="Pl"
          active={false}
          color="var(--plural)"
          diameter="43px"
          activeProperty={number}
          onClick={setNumber}
        />
      </Column>
      <Column>
        <CircleButton
          text="1"
          active={false}
          color="var(--person)"
          diameter="43px"
          activeProperty={person}
          onClick={setPerson}
        />
        <CircleButton
          text="2"
          active={false}
          color="var(--person)"
          diameter="43px"
          activeProperty={person}
          onClick={setPerson}
        />
        <CircleButton
          text="3"
          active={false}
          color="var(--person)"
          diameter="43px"
          activeProperty={person}
          onClick={setPerson}
        />
      </Column>
    </>
  )
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px;
  width: 63px;
`
