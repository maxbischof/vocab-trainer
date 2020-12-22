import React from 'react'
import TestCreation from './TestCreation'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('renders correctly', () => {
  const tree = renderer.create(<TestCreation />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('add wordpairs to the list', () => {
  render(<TestCreation />)
  userEvent.type(screen.getByPlaceholderText('Fremdsprache'), 'the car')
  userEvent.type(screen.getByPlaceholderText('Deutsch'), 'das Auto')
  userEvent.click(screen.getByText('Wortpaar hinzufügen'))

  expect(screen.getByText(/the car/)).toBeInTheDocument()

  expect(screen.getByText(/das Auto/)).toBeInTheDocument()
})

it('removes wordpairs from the list', () => {
  render(<TestCreation />)
  userEvent.type(screen.getByPlaceholderText('Fremdsprache'), 'the car')
  userEvent.type(screen.getByPlaceholderText('Deutsch'), 'das Auto')
  userEvent.click(screen.getByText('Wortpaar hinzufügen'))
  userEvent.click(screen.getByRole('listitem').querySelector('svg'))

  expect(screen.queryByText(/the car/)).toBeNull()
  expect(screen.queryByText(/das Auto/)).toBeNull()
})
