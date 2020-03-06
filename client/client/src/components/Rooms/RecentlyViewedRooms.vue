<template>
<panel title="Recently Viewed Rooms">
  <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories">
      <template slot ="items" slot-scope="slotProps">
          <td class="text-xs-right">
              {{slotProps.item.name}}
          </td>
          <td class="text-xs-right">
              {{slotProps.item.number}}
          </td>
      </template>
  </v-data-table>
</panel>
</template>

<script>
import {mapState} from 'vuex'
import RoomHistoryService from '@/services/RoomHistoryService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Number',
          value: 'number'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await RoomHistoryService.index()).data
    }
  }
}
</script>

<style scoped>
</style>
