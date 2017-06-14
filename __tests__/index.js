import navigation from '../src'

test('first', () => {
  const config = navigation({
    stateKey: { im: 'a navigator' }
  })

  expect(config).toMatchSnapshot()
})
