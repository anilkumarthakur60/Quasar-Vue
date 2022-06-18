<template>
  <q-page padding>
    <input
      type="text"
      v-model="message"
      @keyup="handleKey"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
    />
    <button @click="clearMessage">clear</button>
    <h5 v-show="message.length">{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      message: "i want to learn vue js",
      showmessage: false,
    };
  },
  computed: {
    messageUpperCase() {
      return this.message.toUpperCase();
    },
    messageLowerCase(value) {
      return value.toLowerCase();
    },
  },

  methods: {
    clearMessage() {
      this.message = "";
    },
    handleKey(e) {
      console.log(e);
      if (e.keyCode == 27) {
        // this.alertMessage();
        // this.clearMessage();
      }
    },
    alertMessage() {
      alert(this.message);
    },
  },
};
</script>
