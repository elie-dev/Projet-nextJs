<template>
  <div>
    <!-- <div>{{ number }}</div> -->
    <div>{{ $store.state.number }}</div>
    <v-btn color="warning" @click="add"> Add </v-btn>

    <div v-if="$store.state.users.users.length == 0">Pas d'utilisateurs</div>

    <ul v-else>
      <li v-for="(user, i) in $store.state.users.users" :key="i">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/index'

export default {
  methods: {
    add() {
      this.$store.dispatch(ACTIONS.ADD)
    },
  },
}
</script>
