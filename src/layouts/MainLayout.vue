<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar Todo </q-toolbar-title>
        <div class="text-h6">Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-primary">
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="linkList in essentialLinks"
          :key="linkList.label"
          :icon="linkList.icon"
          :label="linkList.title"
          :to="linkList.link"
          exact
          clickable
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
const linksList = [
  {
    title: "Home",
    caption: "Home ",
    icon: "home",
    link: "/",
  },
  {
    title: "First",
    caption: "First List",
    icon: "school",
    link: "/first",
  },
  {
    title: "List",
    caption: "First List",
    icon: "list",
    link: "/list",
  },
  {
    title: "Todo",
    caption: "PageTodo",
    icon: "list",
    link: "/todo",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
