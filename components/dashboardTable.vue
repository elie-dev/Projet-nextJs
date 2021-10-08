<template>
  <v-simple-table dark>
    <template v-slot:default>
      <tbody>
      <tr
        v-for="item in coordonnees"
        :key="item.name"
      >
        <td>{{ item.designation }}</td>
        <td>{{ item.userInput }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>

</template>

<script>

  export default {
    data () {
      return {
        coordonnees: [
          {
            designation: 'Nom :',
            userInput: '',
          },
          {
            designation: 'E-mail :',
            userInput: '',
          },
          {
            designation: 'Mot de passe :',
            userInput: '',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
