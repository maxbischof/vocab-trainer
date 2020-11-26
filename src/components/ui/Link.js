import React from 'react'
import styled from 'styled-components'

export default function Link({ href, children }) {
  return <StyledLink href={href}>{children}</StyledLink>
}

const StyledLink = styled.a`
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--text);
  margin: 10px;
  font-weight: 700;
  a:visited {
    color: var(--text);
  }
`
