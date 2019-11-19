import firebase from 'firebase';

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {

        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
  }
}