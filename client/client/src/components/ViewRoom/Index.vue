<template>
<div>
<v-layout>
<v-flex xs6>
  <room-metadata :room="room"/>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="room.youtubeId"/>
      </v-flex>
</v-layout>

<v-layout xs6 class="mt-2">
    <v-flex xs6>
      <tab :room="room"/>
  </v-flex>

<v-flex xs6 class="ml-2">
  <lyrics :room="room"/>
</v-flex>
</v-layout>
</div>
</template>
<script>
import {mapState} from 'vuex'
import RoomMetadata from './RoomMetadata'
import YouTube from './YouTube'
import RoomsService from '@/services/RoomsService'
import RoomHistoryService from '@/services/RoomHistoryService'

export default {
  data () {
    return {
      room: {}
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
    const roomId = this.route.params.roomId
    this.room = (await RoomsService.show(roomId)).data
    if (this.isUserLoggedIn) {
      RoomHistoryService.post({
        roomId: roomId
      })
    }
  },
  components: {
    RoomMetadata,
    YouTube
  }
}
</script>

<style scoped>
</style>
