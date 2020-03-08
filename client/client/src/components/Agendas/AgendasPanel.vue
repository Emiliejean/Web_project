<template>
    <panel name="Activities">
         <v-btn
            slot="action"
            :to="{name: 'agendas-create'}"
         class="cyan accent-2"
  light
  medium
  absolute
  right
  middle
  fab>
    <v-icon>add</v-icon> <!-- mdi-plus -->
  </v-btn>
      <div
      v-for="agenda in agendas"
      class="agenda"
      :key="agenda.id">
      <v-layout>
        <v-flex xs6>
<div class="agenda-name">
{{agenda.name}}
</div>
<div class="agenda-price">
  <p> price :{{agenda.price}} </p>
</div>
 <v-btn
        dark
        class="cyan"
        :to="{
          name: 'agenda',
          params: {
            agendaId: agenda.id
            }
            }">
        View
        </v-btn>
        </v-flex>
      </v-layout>
      </div>
        </panel>
</template>

<script>
import AgendaService from '@/services/AgendaService'
export default {
  data () {
    return {
      agendas: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.agendas = (await AgendaService.index(value)).data
      }
    }
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
.imageurl {
  width:  70%;
  margin:  0 auto;

}
</style>
