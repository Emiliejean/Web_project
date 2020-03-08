<template>
 <panel name="Agenda Metadata">
   <v-layout>
        <v-flex xs6>
<div class="agenda-name">
  <p> Activity name:{{agenda.name}} </p>
</div>
<div class="agenda-price">
  <p> price : {{agenda.price}} </p>
</div>

<v-btn
        dark
        class="cyan"
        :to="{
          name: 'agenda-edit',
          params () {
            return {
            agendaId: agenda.id
            }
          }
            }">
        Edit
        </v-btn>

        </v-flex>
        </v-layout>
      </panel>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: [
    'agenda'
  ],
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  }
}
</script>

<style scoped>
.agenda {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.agenda-name {
  font-size: 30px;
}
.agenda-price {
font-size: 18px;
}
</style>
