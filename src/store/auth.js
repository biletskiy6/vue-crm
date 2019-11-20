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

    async fetchUid() {
      const user = await firebase.auth().currentUser;
      return await user.uid || null;
    },

    register({dispatch, commit}, {email, password, name, router}) {
      return firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async (user) => {
            const userUid = await dispatch("fetchUid");
            return firebase.database().ref(`/users/${userUid}/info`).set({
              bill: 10000,
              name
            })
          })
          .then(() => router.push("/"))
          .catch((e) => commit("setError", e));
    },
    async logout({commit}) {
      await firebase.auth().signOut();
      commit("clearInfo");
    }
  }
}