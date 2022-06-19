<template>
  <q-page class="q-pa-md">
    <q-list separator padding bordered>
      <q-item
        v-ripple
        v-for="task in tasks"
        :key="task.id"
        :class="task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        @click="task.completed = !task.completed"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="{ 'text-strike': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" class="q-mr-xs" size="18px" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption>{{
                task.dueDate
              }}</q-item-label>
              <q-item-label class="row justify-end" caption>
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "asdfgh",
          dueDate: "2019/05/12",
          dueTime: "18:30",
          completed: true,
        },
        {
          id: 2,
          name: "ertyui",

          dueDate: "2019/05/12",
          dueTime: "18:30",
          completed: false,
        },
        {
          id: 3,
          name: "ploiuytfd",

          dueDate: "2019/05/12",
          dueTime: "18:30",
          completed: true,
        },
        {
          id: 4,
          name: "poiuyfguhijlkm",
          dueDate: "2019/05/12",
          dueTime: "18:30",
          completed: false,
        },
      ],
    };
  },
};
</script>
