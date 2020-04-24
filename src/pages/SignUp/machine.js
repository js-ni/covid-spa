import {auth, firestore} from 'firebase/app'
import {Machine} from 'xstate'

export default Machine(
  {
    id: `signUp`,
    initial: `editing`,
    states: {
      editing: {
        on: {
          SIGN_UP: `signingUp`,
        },
      },

      signingUp: {
        invoke: {
          id: `createUser`,
          src: `createUser`,
          onDone: `success`,
          onError: {
            actions: `setFormikErrors`,
            target: `editing`,
          },
        },
      },

      success: {
        entry: `redirectToHome`,
        type: `final`,
      },
    },
  },
  {
    services: {
      createUser: async (ctx, event) => {
        try {
          const {user} = await auth().createUserWithEmailAndPassword(
            event.email,
            event.password
          )

          return firestore().collection(`users`).doc(user.uid).set({
            city: event.city,
            phoneNumber: event.phoneNumber,
            username: event.username,
          })
        } catch (err) {
          return Promise.reject(err)
        }
      },
    },
  }
)
