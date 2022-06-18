<template>
  <ul>
    <li>{{ task.name }} {{ index }}</li>
    <li>{{ task.dueDate }}</li>
    <li>{{ task.dueDate }}</li>
    <q-btn round color="primary" size="sm" @click="deleteData(1)" icon="clear" />
  </ul>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: Object,
    index: Number,
  },
  methods: {
    deleteData(index) {},
  },
  mounted() {
    // console.log(this.index);
  },
};
</script>
