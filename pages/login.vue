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
      :counter="15"
      :rules="passwordRules"
      label="Password"
      required
    />

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    />

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>

  import { ACTIONS } from '~/store/users'
  import VueCookies from 'vue-cookie'
  import Vue from 'vue'

  export default {
    middleware: 'guest',

    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 15) || 'Password must be less than 15 characters',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate()) {
          Vue.use(VueCookies)

          // Get data from localStorage
          const data = this.$store.state.users.users
          const userBdd = data.find(element => element.email === this.email)
          if(userBdd !== undefined && userBdd.password === this.password) {
            const user = {
              name: userBdd.name,
              email: this.email,
            }
            this.$cookie.set('auth',JSON.stringify(user));
            console.log(this.$cookie.get('auth'))
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
