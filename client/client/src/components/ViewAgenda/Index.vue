<template>
<div>
<v-layout>
<v-flex xs6>
  <agenda-metadata :agenda="agenda"/>
    </v-flex>
</v-layout>

</div>
</template>
<script>
import {mapState} from 'vuex'
import AgendaMetadata from './AgendaMetadata'
import AgendaService from '@/services/AgendaService'

export default {
  data () {
    return {
      agenda: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const agendaId = this.route.params.agendaId
    this.agenda = (await AgendaService.show(agendaId)).data
  },
  components: {
    AgendaMetadata
  }
}
</script>

<style scoped>
</style>
