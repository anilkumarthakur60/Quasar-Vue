<template >
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="display-6 fw-bold">{{ counterState.count }}</h5>
            <button class="btn btn-sm btn-success" @click="increment">
              Increase
            </button>
            <button class="btn btn-sm btn-warning mx-4" @click="decrement">
              Decrement
            </button>
            <button class="btn btn-sm btn-danger" @click="incrementBy(5)">
              Inrement By 5
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "vuexCounter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    decrement() {
      this.$store.dispatch("counterModule/decrementCounter");
    },
    incrementBy(value) {
      this.$store.dispatch("counterModule/incrementCounterBy", {
        value: value,
      });
    },
  },
  computed: mapGetters({
    counterState: "getCounterState",
  }),
};
</script>