import React from 'react'
import styled from 'styled-components'
import CircleButton from '../CircleButton'

export default function AdjectiveMenu({
  gender,
  setGender,
  number,
  setNumber,
}) {
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
          text="m"
          active={false}
          color="var(--masculine)"
          diameter="43px"
          activeProperty={gender}
          onClick={setGender}
        />
        <CircleButton
          text="f"
          active={false}
          color="var(--feminine)"
          diameter="43px"
          activeProperty={gender}
          onClick={setGender}
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
