<template>
  <div class="">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <task :task="task" :index="index"></task>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    task: require("components/Task.vue").default,
  },
  data() {
    return {
      tasks: [
        {
          name: "goto Shop",
          dueDate: "2077/12/1",
          deuTime: "12:15",
        },
        {
          name: "get bananas",
          dueDate: "2027/12/1",
          deuTime: "18:15",
        },
        {
          name: "get Biscuits",
          dueDate: "2077/12/1",
          deuTime: "12:15",
        },
        {
          name: "get Noodles",
          dueDate: "2077/12/1",
          deuTime: "12:15",
        },
      ],
    };
  },

  methods: {
    deleteData(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style></style>
