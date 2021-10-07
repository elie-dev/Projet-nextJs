<template>
  <v-form ref="form" lazy-validation>
    <!-- <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-btn color="success" class="mr-4" @click="send"> Validate </v-btn> -->
    <add-user-form />
  </v-form>
</template>

<script>
// export default {
//   // :rules="emailRules"
//   // :disabled="!valid"
//   data: () => ({
//     valid: true,
//     email: '',
//     emailRules: [
//       (v) => !!v || 'E-mail is required',
//       (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
//     ],
//   }),
//   methods: {
//     send() {
//       console.log(this.email)
//     },
//   },
// }
</script>
