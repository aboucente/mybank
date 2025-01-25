<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: white; color: black">
        <q-btn
          text-color="green"
          flat
          dense
          round
          icon="mdi-wallet"
          aria-label="Menu"
        />

        <q-toolbar-title> MyWallet </q-toolbar-title>

        <q-btn
          text-color="white"
          color="accent"
          size="sm"
          round
          icon="mdi-plus"
        />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated="" style="background-color: white">
      <div id="footer">
        <q-btn
          v-for="item in menus"
          :icon="item.icon"
          v-bind:key="item.name"
          :to="item.route"
          :color="isUrlContains(item.name) ? 'positive' : 'dark'"
          shape="round"
          flat
        />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
defineOptions({
  name: "MainLayout",
});
const isUrlContains = (str) => {
  console.log(str);
  return route.fullPath.includes(str);
};
const menus = ref([
  {
    name: "",
    route: "/",
    icon: "mdi-view-dashboard",
  },
  {
    name: "wallet",
    route: "/home",
    icon: "mdi-wallet",
  },
  {
    name: "tag",
    route: "/home",
    icon: "mdi-chart-line",
  },
  {
    name: "settings",
    route: "/settings",
    icon: "mdi-dots-vertical",
  },
]);
</script>
<style scoped>
/* Ajoutez ici vos styles spécifiques au layout */
#footer {
  /* background: black; */
  /* width: 70%; */
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-radius: 32px;
}
</style>
