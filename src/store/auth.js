import firebase from 'firebase';

export default {
  actions: {
    login({dispatch, commit}, {email, password, router}) {
      return firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => router.push("/"))
          .catch((e) => {
            console.log(e.code);
            commit("setError", e)
          })
    },

    register({dispatch, commit}, {email, password, name, router}) {
      return firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            const userUid = user.user.uid;
            return firebase.database().ref(`/users/${userUid}/info`).set({
              bill: 10000,
              name
            })
          })
          .then(() => router.push("/"))
          .catch((e) => commit("setError", e));
    },
    logout() {
      return firebase.auth().signOut();
    }
  }
}