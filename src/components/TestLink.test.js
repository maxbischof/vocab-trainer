import React from 'react'
import TestLink from './TestLink'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

describe('my function or component', () => {
  it('renders correctly', () => {
    const testURL = '/tests/123456'
    const tree = renderer
      .create(
        <Router>
          <TestLink testURL={testURL} />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
