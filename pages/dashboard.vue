<template>
  <div class="text-center">
    <h1 class="mt-3 mb-8">Dashboard</h1>
    <dashboardTable/>

    <div class="mt-4">
      <v-btn
        color="error"
        class=""
        @click="deleteAccount"
      >
        Effacer le compte
      </v-btn>
    </div>
  </div>
</template>

<script>

    import Vue from "vue";
    import VueCookies from "vue-cookie";
    import { ACTIONS } from '~/store/users'

    export default {
        middleware: "auth",
        

        methods: {
            deleteAccount() {
                console.log('test')
                Vue.use(VueCookies)
                const user = JSON.parse(this.$cookie.get('auth'))
                this.$store.dispatch(ACTIONS.DELETE_USER_METHOD, user.email)
                this.$cookie.set('auth', '')
                this.$router.push('/login')
                this.$store.dispatch(ACTIONS.LOOUT_METHOD, true)
                console.log(this.$store.state.users.users)
            }
        }
    }

</script>
