import navigation from '../src'

test('first', () => {
  const config = navigation({
    stateKey: { im: 'a navigator' }
  })

  expect(config).toMatchSnapshot()
})

test('second', () => {
  expect(1).toEqual(1)
})
