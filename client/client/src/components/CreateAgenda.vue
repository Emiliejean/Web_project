<template>
<v-layout>
    <v-flex xs6 offset-xs3>
    <panel name= " Agenda Metadata ">
        <v-text-field
        label="Name"
        required
        :rules="[required]"
        v-model="agenda.name"
        ></v-text-field>
        <v-text-field
        label="Price"
       required
        :rules="[required]"
        v-model="agenda.price"
        ></v-text-field>
        <v-text-field
        label="NumberPers"
        required
        :rules="[required]"
        v-model="agenda.numberpers"
        ></v-text-field>
        <div class="danger-alert" v-if="error">
            {{error}}
        </div>
         <v-btn
        dark
        class="cyan"
        @click="create">
        Save Agenda
        </v-btn>
    </panel>
    </v-flex>
</v-layout>
</template>

<script>
import AgendaService from '@/services/AgendaService'
export default {
  data () {
    return {
      agenda: {
        name: null,
        price: null,
        numberpers: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.agenda)
        .every(key => !!this.agenda[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      const agendaId = this.$store.state.route.params.agendaId
      try {
        await AgendaService.post(this.agenda)
        this.$router.push({
          name: 'agendas',
          params: {
            agendaId: agendaId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
