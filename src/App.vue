<template>
  <div id="app">
    <a-layout class="layout">
      <a-layout-header class="layout-header">
        <Header />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="layout-footer">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.layout-header {
  background: $background;
  padding: 0;
}
</style>
