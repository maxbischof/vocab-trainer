import React from 'react'
import WordPairForm from './WordPairForm'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<WordPairForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
