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

  import Vue from "vue";
  import VueCookies from "vue-cookie";

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
            userInput: '**********',
          },
        ],
      }
    },
    mounted () {
      Vue.use(VueCookies)
      const data = JSON.parse(this.$cookie.get('auth'))
      this.coordonnees[1].userInput = data.email
      this.coordonnees[0].userInput = data.name
    }
  }
</script>

<style scoped>

</style>
