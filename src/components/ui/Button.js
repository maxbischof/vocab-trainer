import React from 'react'
import styled from 'styled-components'

export default function Button({ type, onClick, children }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: none;
  padding: 10px 10px;
  margin: 10px;
  background: var(--buttonbackground);
  color: white;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`
