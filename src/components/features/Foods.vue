<template lang="html">
  <div>
    <h2>อาหารที่ชอบ {{ like }}</h2>
    <h2>อาหารที่ไม่ชอบ {{ unlike }}</h2>
    <h2>message: {{ message }}</h2> 
    <!-- {{ message }} render message ใน script data() { message } -->
    <input type="text" v-model="message">
    <hr>
    อาหารที่ชอบ :<input type="text" name="like" @input="changeFood" value="">
    <hr>
    อาหารที่ไม่ชอบ :<input type="text" name="unlike" @input="changeFood" value="">
    <hr>
    <button type="button" @click="onLoadApi">Load Api!</button>
    <hr>
    <!-- for (item in posts) -->
    <h2 v-for="(item, index) in posts" :key="index">{{ item.title }}</h2>
    <h2>count: {{ count  }}</h2>
    <button type="button" @click="addCount">Add</button>
    <button type="button" @click="delCount">del</button>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    // data
    return {
      message: "hello",
      count: 0
    };
  },
  computed: {
    ...mapState({
      posts: state => state.sports.posts,
      like: state => state.sports.like,
      unlike: state => state.sports.unlike
    })
    // store
  },
  watch: {
    message(val, oldval) {
      // เมื่อค่าของ message เปลี่ยนค่าจะเข้า function นี้
      // val => ค่าใหม่ที่เปลี่ยน, oldval => ค่าเดิม
      console.log(val, oldval);
    },
    count(val) {
      // เมื่อ ค่า count < 0 จะแจ้ง alert
      if (val < 0) {
        alert("Count < 0");
      }
    }
  },
  methods: {
    // methods => function call
    changeFood(event) {
      let payload = {};
      if (event.target.name === "like") {
        payload = {
          actions: "like",
          msg: event.target.value
        };
      } else {
        payload = {
          actions: "unlike",
          msg: event.target.value
        };
      }
      this.$store.commit("SET_STORE", payload);
    },
    onLoadApi(event) {
      this.$store.dispatch("localPost", event);
    },
    addCount() {
      this.count += 1;
    },
    delCount() {
      this.count += -1;
    }
  }
};
</script>