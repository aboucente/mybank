<template>
  <div>
    <p class="mb-sm" >Mot de passe:</p>
    <div class="pin-input-container">
      <input
        v-for="(value, index) in pin"
        :key="index"
        type="password"
        inputmode="numeric"
        pattern="[0-9]*"
        class="pin-input"
        maxlength="1"
        :ref="(el) => (inputRefs[index] = el)"
        v-model="pin[index]"
        @input="onInput(index)"
        @keydown="onKeyDown(index, $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 4,
  },
});

const emit = defineEmits(["completed"]);
const inputRefs = reactive([]); // Références aux inputs
const pin = ref(Array(props.length).fill("")); // Tableau contenant les valeurs du PIN

// Gestion de l'input
const onInput = (index) => {
  if (index < props.length - 1 && pin.value[index] !== "") {
    inputRefs[index + 1].focus(); // Passer au champ suivant
  }

  if (pin.value.join("").length === props.length) {
    emit("completed", { mdp: pin.value.join(""), iscomplet: true });
  } else {
    emit("completed", { iscomplet: false });
  }
};

// Gestion des touches (backspace et autres)
const onKeyDown = (index, $event) => {
  if ($event.key === "Backspace") {
    handleBackspace(index);
  }
};

const handleBackspace = (index) => {
  if (pin.value[index] === "" && index > 0) {
    inputRefs[index - 1].focus(); // Focus sur l'input précédent
    pin.value[index - 1] = ""; // Effacer l'input précédent
  } else {
    pin.value[index] = ""; // Effacer l'input courant
  }
  emit("completed", { iscomplet: false });
};
</script>

<style scoped>
.pin-input-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.pin-input {
  width: 16.66%;
  height: 50px;
  text-align: center;
  font-size: 24px;
  border: 1px solid #585757;
  border-radius: 8px;
  outline: none;
}
</style>
