import React from 'react'
import WordPairList from './WordPairList'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const words = [
    { foreign: 'le ordinateur', native: 'der Computer' },
    { foreign: 'la école', native: 'die Schule' },
  ]
  const tree = renderer.create(<WordPairList words={words} />).toJSON()
  expect(tree).toMatchSnapshot()
})
