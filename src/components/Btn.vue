<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="handleAction">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Btn",
  props: {
    action: {
      type: String,
      required: true,
      validator: (value) => ['increment', 'decrement'].includes(value)
    },
    initialValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: this.initialValue
    };
  },
  computed: {
    buttonText() {
      return this.action === 'increment' ? 'Incrementar' : 'Decrementar';
    }
  },
  methods: {
    handleAction() {
      if (this.action === 'increment') {
        this.count++;
      } else if (this.action === 'decrement') {
        this.count--;
      }
      this.$emit('update', this.count); // Emite o novo valor para o componente pai
    }
  },
  emits: ['update']
};
</script>

<style scoped>
button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
