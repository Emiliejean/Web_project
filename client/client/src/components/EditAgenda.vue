<template>
<v-layout>
    <v-flex xs6 offset-xs3>
    <panel name= "Edit Activity Metadata ">
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
        @click="save">
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
    async save () {
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
        await AgendaService.put(this.agenda)
        this.$router.push({
          name: 'agenda',
          params: {
            agendaId: agendaId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const agendaId = this.$store.state.route.params.agendaId
      this.agenda = (await AgendaService.show(agendaId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
