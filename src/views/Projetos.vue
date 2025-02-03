<template>
  <div class="projetos">
    <h1 class="title">Projetos</h1>
    <Btn/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Btn from '@/components/btn.vue';
import {defineComponent} from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projetos',
  components:{
    Btn
  }

})

</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>

