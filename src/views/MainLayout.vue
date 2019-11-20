<template>
    <div>
        <div class="app-main-layout">
            <Navbar @click="toggleSidebar"/>

            <Sidebar :isOpen="isOpen"/>

            <main class="app-content" :class="{full: !isOpen}">
                <div class="app-page">
                    <router-view/>
                </div>
                <div class="fixed-action-btn">
                    <router-link to="/record" class="btn-floating btn-large blue" href="#">
                        <i class="large material-icons">add</i>
                    </router-link>
                </div>
            </main>
        </div>
    </div>
</template>


<script>
  import Navbar from "@/components/app/Navbar.vue";
  import Sidebar from "@/components/app/Sidebar.vue";


  export default {
    data: () => {
      return {
        isOpen: true
      };
    },
    mounted() {
      if (!Object.keys(this.$store.getters.info).length) {
        this.$store.dispatch("fetchInfo");
      }
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      }
    },
    components: {
      Navbar,
      Sidebar
    }
  };
</script>