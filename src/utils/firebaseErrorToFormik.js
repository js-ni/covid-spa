import firebaseTranslateErrorMessage from './firebaseTranslateErrorMessage'

// this is the map that translates
// an error code to the name of a field
const CODE_FIELD_MAP = {
  'auth/email-already-in-use': `email`,
  'auth/weak-password': `password`,
}

export default function firebaseErrorToFormik(error) {
  if (!CODE_FIELD_MAP[error.code]) {
    return {}
  }

  const errors = {}

  errors[CODE_FIELD_MAP[error.code]] = firebaseTranslateErrorMessage(error)

  return errors
}
