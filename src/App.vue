<template>
  <ReactiveLog/>
  <StateToggler/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ReactiveLog from './components/ReactiveLog.vue';
import StateToggler from './components/StateToggler.vue';

@Options({
  components: {
    ReactiveLog,
    StateToggler
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  background: #115072;
}
</style>
