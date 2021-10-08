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

  import NxLocalForage from 'vue-localstorage';
  import Vue from 'vue';

  export default {

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

          if(data[this.email] !== undefined && data[this.email].password === this.password) {
            console.log('oui')
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
