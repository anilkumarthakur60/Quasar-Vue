<template>
  <nav class="h-full ml-12">
    <ul class="flex h-full p-0 m-0 list-none">
      <li class="h-full ml-9 first:ml-0" v-for="(menu, index) in menuItems" :key="index">
        <a href="" class="flex items-center h-full py-2.5">{{ menu }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      company: "Bobo Careers",
      url: "https://facebook.com/anilkumarthakur60",
      menuItems: ["Team", "Location", "Life at Bobo", "How"],
    };
  },
};
</script>
