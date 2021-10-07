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

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Vous devez accepter pour pouvoir continuer !']"
      label="Confirmation ?"
      required
    />

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

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
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
