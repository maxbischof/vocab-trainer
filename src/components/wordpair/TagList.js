import React from 'react'
import styled from 'styled-components'

export default function TagList({ tags }) {
  const colors = {
    Substantiv: 'var(--noun)',
    Verb: 'var(--verb)',
    Adjektiv: 'var(--adjective)',
  }
  const color = colors[tags.wordClass]

  return (
    <StyledTagList wordClass={tags.wordClass}>
      {tags.wordClass && <Tag color={color}>{tags.wordClass}</Tag>}
      {tags.gender && <Tag color={color}> {tags.gender}</Tag>}
      {tags.number && <Tag color={color}> {tags.number}</Tag>}
      {tags.person && <Tag color={color}> {tags.person}</Tag>}
    </StyledTagList>
  )
}

const StyledTagList = styled.div`
  margin: 10px 0;
  display: flex;
`

const Tag = styled.span`
  font-size: 80%;
  border: 1px solid ${(props) => `rgb(${props.color})`};
  color: ${(props) => `rgb(${props.color})`};
  border-radius: 3px;
  padding: 5px 5px;
  margin-right: 10px;
`
