<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <todo-task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></todo-task>
    </q-list>
  </q-page>
</template>

<script>
import TodoTask from "src/components/TodoTask.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    TodoTask,
  },
};
</script>

<style></style>
