import React from 'react'
import GrammarMenu from './GrammarMenu'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<GrammarMenu />).toJSON()
  expect(tree).toMatchSnapshot()
})
