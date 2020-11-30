import React from 'react'
import Link from './ui/Link'
import styled from 'styled-components'
import Button from './ui/Button'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function TestCreated({ testURL }) {
  const fullURL = window.location.host + testURL
  return (
    <StyledTestLink>
      <h1>Test erstellt</h1>
      Dein Link zum Test:
      <Link href={testURL}>{fullURL}</Link>
      <CopyToClipboard text={fullURL}>
        <Button>Copy</Button>
      </CopyToClipboard>
    </StyledTestLink>
  )
}

const StyledTestLink = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
