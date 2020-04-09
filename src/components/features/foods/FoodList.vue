<template lang="html">
  <div>
    <h1>รายการอาหาร ทั้งหมด</h1>
    <h2 v-for="(item, index) in items" :key="index">{{ item.title }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    this.setup()
  },
  methods: {
    setup() {
      this.getFoodsList()
    },
    getFoodsList() {
      this.$store.dispatch("getFoodsMenu")
    }
  },
  computed: {
    ...mapState({
      items: state => state.foods.items
    })
  }
}
</script>