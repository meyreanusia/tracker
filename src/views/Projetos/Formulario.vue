<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/index";

import { ALTERA_PROJETO, ADICIONA_PROJETO } from "../../store/tipo-de-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import useNotificador from '@/hoocks/notificador'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Formulario",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.notificar(
        TipoNotificacao.SUCESSO,
        "Excelente!",
        "O produto foi cadastrado com sucesso!"
      );

      this.nomeDoProjeto = "";
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar} = useNotificador()
    return {
      store,
      notificar
    };
  },
});
</script>
