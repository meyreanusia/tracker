<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="column is-flex is-flex-grow-1">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <Cronometro :tempoEmSegundos="tempoEmSegundos" />
       <!-- Botão Play -->
       <BotaoCronometro
        icone="fas fa-play"
        texto="play"
        :desabilitado="cronometroRodando"
        @click="iniciar"
      />

      <BotaoCronometro
      icone="fas fa-stop"
      texto="Stop"
      :desabilitado="!cronometroRodando"
      @click="finalizar"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BotaoCronometro from "./BotaoCronometro.vue";
import Cronometro from "./Cronometro.vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Temporizador",
  components: { Cronometro, BotaoCronometro },
  emits: ["aoTemporizadoFinalizado"],
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: null as number | null,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      if (this.cronometroRodando) return;
      this.cronometroRodando = true;
      this.cronometro =  window.setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false;
      if (this.cronometro !== null) {
        clearInterval(this.cronometro);
      }

      this.$emit("aoTemporizadoFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
