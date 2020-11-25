import React from 'react'
import styled from 'styled-components'

export default function Input({ name, type, placeholder, onChange, value }) {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></StyledInput>
  )
}

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--text);
  padding: 5px;
  margin: 10px 0 10px 0;
`
