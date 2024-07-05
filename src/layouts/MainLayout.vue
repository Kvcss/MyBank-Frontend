<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated> </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style scoped>
/* Adicione estilos específicos do layout aqui */
</style>
