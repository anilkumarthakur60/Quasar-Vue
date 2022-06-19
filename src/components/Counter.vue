<template >
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="display-6 fw-bold">{{ count }}</h5>
            <button class="btn btn-sm btn-success" @click="increment">
              Increase
            </button>
            <button class="btn btn-sm btn-warning mx-4" @click="decrement">
              Decrement
            </button>
            <button class="btn btn-sm btn-danger" @click="incrementBy">
              Inrement By 5
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    incrementBy() {
      this.count += 5;
    },
  },
};
</script>