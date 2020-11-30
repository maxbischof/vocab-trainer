import React from 'react'
import WordPair from './WordPair'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const wordpair = { foreign: 'le ordinateur', native: 'der Computer' }
  const tree = renderer.create(<WordPair word={wordpair} />).toJSON()
  expect(tree).toMatchSnapshot()
})
