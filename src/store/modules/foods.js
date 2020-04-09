import axios from "axios";

const state = {
  items: []
}

const getters = {
  foods: state => state.foods
}

const actions = {
  getFoodsMenu(context) {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      const items = res.data
      context.commit("SET_ITEMS", items)
    })
    .catch(error => { console.log(error) })
    .finally(()=> console.log("load success"))
  }
}

const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}