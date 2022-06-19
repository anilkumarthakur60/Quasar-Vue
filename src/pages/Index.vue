<template>
  <q-page padding>
    <h6>{{ message.length }}</h6>
    <input
      type="text"
      :class="{ error: message.length > 12 }"
      v-model="message"
      @keyup="handleKey"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :style="errorStype"
      ref="messageInput"
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
    errorStype() {
      if (this.message.length > 12) {
        return {
          color: "red",
          background: "pink",
        };
      }
    },
  },

  methods: {
    clearMessage() {
      this.message = "";
    },
    handleKey(e) {
      // console.log(e);
      if (e.keyCode == 27) {
        this.clearMessage();
      }
    },
    alertMessage() {
      alert(this.message);
    },
    messageLowerCase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus();
        console.log("input inerted");
      },
    },
  },

  mounted() {
    // console.log(this.$refs.messageInput);
    this.$refs.messageInput.className = "bg-green";
  },
};
</script>
<style>
input,
button {
  font-size: 23px;
}
.error {
  color: red;
  background: pink;
}
</style>
