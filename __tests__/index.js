import navigation from '../src'

describe('placeholder', () => {
  test('first', () => {
    const config = navigation({
      stateKey: { im: 'a navigator' }
    })

    expect(config).toMatchSnapshot()
  })

  test('second', () => {
    expect(1).toEqual(1)
  })
})
