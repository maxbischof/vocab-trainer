import React from 'react'
import List from './List'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const words = [
    { foreign: 'le ordinateur', native: 'der Computer' },
    { foreign: 'la école', native: 'die Schule' },
  ]
  const tree = renderer.create(<List words={words} />).toJSON()
  expect(tree).toMatchSnapshot()
})
