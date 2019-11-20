import firebase from 'firebase/app';
export default {
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = null
    }
  },
  actions: {
   async fetchInfo({ commit, dispatch }) {
      const userId = await dispatch("fetchUid");
      firebase.database().ref(`/users/${userId}/info`).once("value").then((snapshot) => {
          commit("setInfo", snapshot.val())
      });
    }
  },
  getters: {
    info(state) {
      return state.info;
    }
  }
}