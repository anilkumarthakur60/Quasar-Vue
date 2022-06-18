<template>
  <q-page padding>
    <h6>{{ message.length }}</h6>
    <input
      type="text"
      v-model="message"
      @keyup="handleKey"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
    />
    <button @click="clearMessage">clear</button>
    <h5 v-if="message.length">{{ message }}</h5>
    <h5 v-else>No Message</h5>

    <p v-if="messageUpperCase.length">
      UpperCaseMessage[{{ messageUpperCase.length }}]{{ messageUpperCase }}
    </p>
    <p v-if="messageUpperCase.length">
      LowerCaseMessage[{{ messageLowerCases.length }}] {{ messageLowerCases }}
    </p>
    <p v-if="messageLowerCase(message).length">
      LowerCaseMessage[{{ messageLowerCase(message).length }}]
      {{ messageLowerCase(message) }}
    </p>
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
    messageLowerCases() {
      // alert(value);
      // console.log("lowercase passed value", value);
      return this.message.toLowerCase();
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
    messageLowerCase(value) {
      // alert(value);
      console.log("lowercase passed", value);
      return value.toLowerCase();
    },
  },
};
</script>
