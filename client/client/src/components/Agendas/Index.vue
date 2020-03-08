<template>
<v-layout>
<v-flex :class="{
  xs12: !isUserLoggedIn,
  xs: isUserLoggedIn
}" class="ml-2">
   <agendas-panel class="mt-2 ml-5 mr-5" />
  </v-flex>
  </v-layout>
</template>

<script>
import AgendasPanel from './AgendasPanel'
import AgendaService from '@/services/AgendaService'
import {mapState} from 'vuex'
export default {
  components: {
    AgendasPanel
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      agendas: null
    }
  },
  async mounted () {
    this.agendas = (await AgendaService.index()).data
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
