<template>
  <q-item class="wallet q-mb-md">
    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.date }}</q-item-label>
    </q-item-section>
    <br />

    <q-item-section side>
      <q-item-label class="iconpx">{{
        dollartagCaption(props.montant)
      }}</q-item-label>
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

  date: {
    type: String,
    default: "",
  },

  montant: {
    type: String,
    default: "#",
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
  color: #e25d0f;
  font-size: 15px;
  font-weight: bolder;
}
</style>
