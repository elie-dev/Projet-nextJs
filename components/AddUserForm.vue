<template>
  <div>
    <v-text-field
      v-model="name"
      label="Nom d'utilisateur"
      required
    ></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-btn color="success" @click="add"> Add user </v-btn>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    name: '',
    email: '',
  }),
  methods: {
    add() {
      // console.log(this.name)
      // console.log(this.$store)
      this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
        name: this.name,
        email: this.email,
      })
    },
  },
}
</script>
