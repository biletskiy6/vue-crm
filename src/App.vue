<template>
    <div id="app">
        <component v-bind:is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
  import Home from "./views/Home";
  import EmptyLayout from "./views/EmptyLayout";
  import MainLayout from "./views/MainLayout";

  export default {
    data() {
      return {};
    },

    computed: {
      layout() {
        return (this.$route.meta.layout || "main") + "-layout";
      }
    },

    components: {
      EmptyLayout,
      MainLayout
    }
  };
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "assets/index.css";
</style>