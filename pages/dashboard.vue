<template>
  <div class="text-center">
    <h1 class="mt-3 mb-8">Dashboard</h1>
    <dashboardTable/>

    <div class="mt-4">
      <v-btn
        color="warning"
        class="mr-6"
        @click="reset"
      >
        Modifier les informations
      </v-btn>

      <v-btn
        color="error"
        class=""
        @click="reset"
      >
        Effacer le compte
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: "auth",
  }

</script>
