import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

it('renders without button style correctly', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders primary button style correctly', () => {
  const tree = renderer.create(<Button buttonstyle="primary" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders secondary button style correctly', () => {
  const tree = renderer.create(<Button buttonstyle="secondary" />).toJSON()
  expect(tree).toMatchSnapshot()
})
