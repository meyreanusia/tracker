<template>
  <button class="button" @click="handleClick" :disabled="desabilitado">
    <span class="icon">
      <i :class="icone"></i>

    </span>
    <span>{{ texto }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "BotaoCronometro",
  props: {
    icone: {
      type: String as PropType<string>,
      required: true,
    },
    texto: {
      type: String as PropType<string>,
      required: true,
    },
    desabilitado: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  methods:{
    handleClick() {
      this.$emit("click");
    }
  }
});
</script>
