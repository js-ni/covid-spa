import firebaseErrorToFormik from '../firebaseErrorToFormik'

test(`should return an error`, () => {
  const code = `auth/email-already-in-use`

  expect(firebaseErrorToFormik({code})).not.toEqual({})
})

test(`should return an empty object when the error is not mapped`, () => {
  expect(firebaseErrorToFormik({code: `code`})).toEqual({})
})
