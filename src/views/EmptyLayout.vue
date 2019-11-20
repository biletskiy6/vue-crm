<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>


<script>
import messages from '@/utils/messages';
  export default {
    computed: {
      error() {
        return this.$store.getters.error;
      }
    },
    watch: {
      error() {
        this.$error(messages[this.error.code] || 'Что-то пошло не так');
      }
    }

  }

</script>