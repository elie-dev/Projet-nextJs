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
      label="Nom"
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
  export default {
    data: () => ({
      show1: true,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Moins de 10 caractères',
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
        this.$refs.form.validate()
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
