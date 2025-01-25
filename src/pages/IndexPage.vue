<template>
  <q-page style="background-color: whitesmoke !important" class="q-pa-md">
    <div class="row">
      <b class="col-12 q-mb-md sectionTitle">Transactions</b>
      <Transactions
        class="col-12"
        v-for="item in transactions"
        :key="item.title"
        :title="item.title"
        :date="item.date"
        :montant="item.montant"
      />
    </div>
    <div class="row">
      <b class="col-12 q-mb-md sectionTitle">Portfeuilles</b>
      <Wallet
        class="col-12"
        v-for="item in linksList"
        :key="item.title"
        :title="item.title"
        :caption="item.caption"
      />
    </div>
  </q-page>
</template>

<script setup>
import Wallet from "components/Wallet.vue";
import Transactions from "src/components/Transactions.vue";
defineOptions({
  name: "IndexPage",
});
const linksList = [
  {
    title: "Docs",
    caption: "3 500.00",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "10 000.00",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "5 600.00",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
];
const transactions = [
  {
    title: "Repas jour",
    montant: "3 500.00",
    date: "01-01-2025",
  },
  {
    title: "Wi-Fi",
    montant: "6 000.00",
    date: "06-01-2025",
  },
  {
    title: "Essence semaine",
    montant: "5 600.00",
    date: "11-01-2025",
  },
];
</script>
<style scoped>
.page {
  height: 100vh;
}
.sectionTitle {
  color: green;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  font-size: 20px;
}
</style>
