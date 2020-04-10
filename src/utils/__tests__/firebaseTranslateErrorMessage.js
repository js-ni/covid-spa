import firebaseTranslateErrorMessage, {
  FIREBASE_CODE_MESSAGE_MAP,
} from '../firebaseTranslateErrorMessage'

test(`should return a translated message`, () => {
  const code = `auth/email-already-in-use`

  expect(firebaseTranslateErrorMessage({code})).toEqual(
    FIREBASE_CODE_MESSAGE_MAP[code]
  )
})

test(`should return the original message when the translation doesn't exist`, () => {
  const error = {
    code: `code`,
    message: `message`,
  }

  expect(firebaseTranslateErrorMessage(error)).toEqual(error.message)
})
