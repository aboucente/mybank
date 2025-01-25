<template>
  <q-item
    class="wallet q-mb-md"
    clickable
    tag="a"
    to="/wallet"
    :href="props.link"
  >
    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ dollartagCaption(props.caption) }}</q-item-label>
    </q-item-section>
    <br />

    <q-item-section side>
      <q-item-label
        ><q-icon class="iconpx" name="mdi-menu-right"
      /></q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "EssentialLink",
});
const dollartagCaption = (str) => {
  return str + " FCFA";
};
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
<style scoped>
.wallet {
  background-color: white;
  border-color: whitesmoke;
  border-radius: 10px;
}
.iconpx {
  font-size: 25px;
  font-weight: bolder;
}
</style>
