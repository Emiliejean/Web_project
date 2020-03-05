<template>
<v-layout column>
<v-flex xs6 offset-xs3>
  <panel title='Register'>
    <form
    name="tab-tracker-form"
autocomplete="off">
   <v-text-field
label="Email"
v-model="email"
></v-text-field>
<br>
<v-text-field
label="Password"
v-model="password"
type = "password"
autocomplete="new-password"
></v-text-field>
<br>
<v-text-field
label="Nom"
v-model="nom"
></v-text-field>
<br>
<v-text-field
label="Prénom"
v-model="prenom"
></v-text-field>
<br>
<v-text-field
label="Numéro Téléphone"
v-model="numero"
></v-text-field>
<br>
<v-text-field
label="Adresse"
v-model="adresse"
></v-text-field>
<br>
<v-text-field
label="Admin"
v-model="admin"
></v-text-field>
</form>
<br>
  <div class="danger-alert" v-html="error" />
    <br>
  <v-btn
  dark
  class="cyan"
  @click="register">Register</v-btn>
  </panel>
  </v-flex>
  </v-layout>
  </template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      nom: '',
      prenom: '',
      numero: '',
      adresse: '',
      admin: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
