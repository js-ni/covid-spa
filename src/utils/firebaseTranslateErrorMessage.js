export const FIREBASE_CODE_MESSAGE_MAP = {
  'auth/email-already-in-use': `La dirección de correo electrónico ya está en uso por otra cuenta.`,
  'auth/weak-password': `La contraseña debe tener 6 caracteres o más.`,
}

export default function firebaseTranslateErrorMessage(error) {
  return FIREBASE_CODE_MESSAGE_MAP[error.code] ?? error.message
}
