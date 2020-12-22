import React from 'react'
import styled from 'styled-components'

export default function Button({ type, onClick, children, buttonstyle }) {
  const buttonStyles = {
    primary: {
      background: 'var(--primarybutton)',
    },
    secondary: {
      background: 'var(--secondarybutton)',
    },
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      buttonstyle={buttonStyles[buttonstyle]}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: none;
  margin: 5px;
  background: ${(props) =>
    props.buttonstyle?.background || 'var(--primarybutton)'};
  color: white;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  height: 36px;
  max-width: 238px;
`
