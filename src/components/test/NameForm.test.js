import React from 'react'
import NameForm from './NameForm'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<NameForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
