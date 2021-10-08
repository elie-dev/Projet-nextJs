<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Prénom"
      required
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    />

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    />

    <v-text-field
      v-model="confirmPassword"
      :rules="confirmPasswordRules"
      label="Confirm Password"
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
      Annuler formulaire
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Annuler inscription
    </v-btn>
  </v-form>
</template>

<script>
  import NxLocalForage from 'vue-localstorage';
  import Vue from 'vue';

  export default {

    data () {
      return {
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
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
        confirmPassword: '',
        confirmPasswordRules: [
          v => !!v || 'type confirm password',
          v => v === this.password || 'The password confirmation does not match.',
        ],
        checkbox: false,
      }
    },

    methods: {
      validate () {
        if(this.$refs.form.validate()) {

          Vue.use(NxLocalForage, {
            name: 'ls',
            bind: true //created computed members from your variable declarations
          })

          // Get data from localStorage
          let data = Vue.ls.get('users')
          if (data === null) {
            data = {}
            Vue.ls.set('users', JSON.stringify(data))
          } else {
            data = JSON.parse(data)
          }

          // Check if email is use by another account
          if(data[this.email] === undefined) {
            data[this.email] = {
              name: this.name,
              password: this.password
            }
            Vue.ls.set('users', JSON.stringify(data))
            console.log('ok')
          } else {
            // email deja utiliser
            // TO DO: renvoyer une erreur
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
