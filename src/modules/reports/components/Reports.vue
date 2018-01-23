<template>
  <element>
    <h1>Reports</h1>
    <h3><router-link to="/">Home</router-link></h3>
  </element>
</template>

<script>
import store from '@/store';

export default {
  created() {
    import('@/modules/reports/store').then(m => store.registerModule('reports', m));
  },
};
</script>
