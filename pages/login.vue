<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    />

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :counter="15"
      :rules="passwordRules"
      :type="show1 ? 'text' : 'password'"
      label="Mot de passe"
      hint="15 lettres maximum"
      required
      @click:append="show1 = !show1"
    />

    <div class="mt-4 ml-8">
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Valider
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Effacer
      </v-btn>
    </div>

  </v-form>
</template>

<script>

  import { ACTIONS } from '~/store/users'
  import VueCookies from 'vue-cookie'
  import Vue from 'vue'
  import NxLocalForage from 'vue-localstorage';

  Vue.use(NxLocalForage, {
    name: 'ls',
    bind: true //created computed members from your variable declarations
  })

  export default {
    middleware: 'auth',

    data: () => ({
      show1: true,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Mot de passe obligatoire',
        v => (v && v.length <= 15) || 'Moins de 15 caractères',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate()) {
          Vue.use(VueCookies)

          let dataBdd = Vue.ls.get('users')
          if (dataBdd === null) {
            dataBdd = []
          } else {
            dataBdd = JSON.parse(dataBdd)
            console.log(this.$store.state.users.users)
            if (this.$store.state.users.users.length === 0) {
              dataBdd.forEach(user => {
                this.$store.dispatch(ACTIONS.ADD_USER_METHOD, user)
              });
              console.log(this.$store.state.users.users)
            }
          }
          // Get data from localStorage
          const data = this.$store.state.users.users
          const userBdd = data.find(element => element.email === this.email)
          if(userBdd !== undefined && userBdd.password === this.password) {
            this.$store.dispatch(ACTIONS.LOGIN_METHOD, true)
            const user = {
              name: userBdd.name,
              email: this.email,
            }
            this.$cookie.set('auth',JSON.stringify(user));
            this.$router.push('/dashboard')
            
          } else {
            console.log('non')
          }
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
