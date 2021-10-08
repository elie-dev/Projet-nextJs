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

  import NxLocalForage from 'vue-localstorage';
  import Vue from 'vue';

  export default {

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
