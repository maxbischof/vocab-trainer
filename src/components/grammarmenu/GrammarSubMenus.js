import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'

export default function GrammarSubMenus({
  wordClass,
  gender,
  setGender,
  person,
  setPerson,
  number,
  setNumber,
}) {
  return (
    <>
      {wordClass === 'N' && (
        <GrammarSubMenu>
          <Column>
            <Selection
              text="m"
              color="var(--masculine)"
              diameter="43px"
              activeProperty={gender}
              onClick={setGender}
            />
            <Selection
              text="f"
              color="var(--feminine)"
              diameter="43px"
              activeProperty={gender}
              onClick={setGender}
            />
            <Selection
              text="n"
              color="var(--neuter)"
              diameter="43px"
              activeProperty={gender}
              onClick={setGender}
            />
          </Column>
        </GrammarSubMenu>
      )}
      {wordClass === 'A' && (
        <GrammarSubMenu>
          <Column>
            <Selection
              text="Sg"
              active={false}
              color="var(--singular)"
              diameter="43px"
              activeProperty={number}
              onClick={setNumber}
            />
            <Selection
              text="Pl"
              active={false}
              color="var(--plural)"
              diameter="43px"
              activeProperty={number}
              onClick={setNumber}
            />
          </Column>
          <Column>
            <Selection
              text="m"
              active={false}
              color="var(--masculine)"
              diameter="43px"
              activeProperty={gender}
              onClick={setGender}
            />
            <Selection
              text="f"
              active={false}
              color="var(--feminine)"
              diameter="43px"
              activeProperty={gender}
              onClick={setGender}
            />
          </Column>
        </GrammarSubMenu>
      )}
      {wordClass === 'V' && (
        <GrammarSubMenu>
          <Column>
            <Selection
              text="Sg"
              active={false}
              color="var(--singular)"
              diameter="43px"
              activeProperty={number}
              onClick={setNumber}
            />
            <Selection
              text="Pl"
              active={false}
              color="var(--plural)"
              diameter="43px"
              activeProperty={number}
              onClick={setNumber}
            />
          </Column>
          <Column>
            <Selection
              text="1"
              active={false}
              color="var(--person)"
              diameter="43px"
              activeProperty={person}
              onClick={setPerson}
            />
            <Selection
              text="2"
              active={false}
              color="var(--person)"
              diameter="43px"
              activeProperty={person}
              onClick={setPerson}
            />
            <Selection
              text="3"
              active={false}
              color="var(--person)"
              diameter="43px"
              activeProperty={person}
              onClick={setPerson}
            />
          </Column>
        </GrammarSubMenu>
      )}
    </>
  )
}

const GrammarSubMenu = styled.div`
  display: flex;
  height: 209px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px;
  width: 63px;
`
