import React from 'react'
import styled from 'styled-components'

export default function Column({ children }) {
  return <StyledColumn>{children}</StyledColumn>
}

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px;
  width: 63px;
`
