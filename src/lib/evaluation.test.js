import { evaluate } from './evaluation'

describe('evaluate', () => {
  it('1 Point for strictly equal words receive', () => {
    expect(evaluate('un cinéma', 'un cinéma')).toBe(1)
  })

  it('1 Point for same letters but different higher or lower case', () => {
    expect(evaluate('un cinéma', 'un Cinéma')).toBe(1)
  })

  it('0.5 Points for one different character but same word length', () => {
    expect(evaluate('un cinéma', 'un ciméma')).toBe(0.5)
  })

  it('0.5 Points for one character missing', () => {
    expect(evaluate('un cinéma', 'un cinéa')).toBe(0.5)
  })

  it('0.5 Points for one character added', () => {
    expect(evaluate('un cinéma', 'unn cinéma')).toBe(0.5)
  })
})
