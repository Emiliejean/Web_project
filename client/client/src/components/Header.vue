<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
          <router-link
            class="home"
            tag="span"
            :to="{
              name: 'root'
              }">
            Breath
            </router-link>
        </v-toolbar-title>

         <v-toolbar-items>
            <v-btn
            flat
            dark
            :to="{name: 'rooms'}">
            Rooms
            </v-btn>
            <v-btn
            flat
            dark
            :to="{name: 'restaurant'}">
            Restaurant
            </v-btn>
            <v-btn
            flat
            dark
            :to="{name: 'agendas'}">
            Agenda
            </v-btn>
            <v-btn
            flat
            dark
            :to="{name: 'admin-rooms'}">
            Admin
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
         :to="{name: 'login'}">
                Login
                </v-btn>

                 <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
         :to="{name: 'register'}">
                Sign up
                </v-btn>

                <v-btn
                v-if="$store.state.isUserLoggedIn"
                 flat
                 dark
                @click="logout">
                Log Out
                </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'rooms'
      })
    }
  }
}
</script>
<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: #E9E;
}
</style>
