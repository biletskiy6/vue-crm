<template>
    <div class="home">
        <div>
            <div class="page-title">
                <h3>Счет</h3>

                <button class="btn waves-effect waves-light btn-small">
                    <i class="material-icons">refresh</i>
                </button>
            </div>
            <Loader v-if="loading"/>
            <div v-else class="row">
                <div class="col s12 m6 l4">
                    <HomeBill/>
                </div>

                <div class="col s12 m6 l8">
                    <HomeCurrency/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HomeBill from '@/components/HomeBill.vue';
  import HomeCurrency from '@/components/HomeCurrency.vue';
  import Loader from "@/components/app/Loader";

  export default {
    name: "home",
    data() {
      return {
        loading: true,
        currency: null
      };
    },
    async mounted() {
        this.currency =  await this.$store.dispatch("fetchCurrency");
        this.loading = false;
    },
    components: {
      Loader,
      HomeBill, HomeCurrency
    }
  };
</script>
