<template>
    <panel title="Manage rooms">
         <v-btn
            slot="action"
            :to="{name: 'rooms-create'}"
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
      v-for="room in rooms"
      class="room"
      :key="room.id">
      <v-layout>
        <v-flex xs6>
<div class="room-name">
  {{room.name}}
</div>
<div class="room-number">
  {{room.number}}
</div>
<v-btn
        dark
        class="cyan"
        :to="{
          name: 'room',
          params: {
            roomId: room.id
            }
            }">
        View
        </v-btn>
        <v-btn
        dark
        class="cyan"
         @click="deleteroom(room)">
        Delete
        </v-btn>
        </v-flex>
          <v-flex xs6>
<img class="imageurl" :src="room.imageUrl"/>
        </v-flex>
        {{room.name}}
       <p> / room number : {{room.number}}  /
        price: {{room.price}} </p>
      </v-layout>
      </div>
        </panel>
</template>

<script>
import RoomsService from '@/services/RoomsService'
export default {
  data () {
    return {
      rooms: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.rooms = (await RoomsService.index(value)).data
      }
    }
  },
  methods: {
    async deleteroom (room) {
      try {
        await RoomsService.delete(this.room.id)
        this.room = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.room {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.room-name {
  font-size: 30px;
}
.room-number {
font-size: 24px;
}
.room-price {
font-size: 18px;
}
.imageurl {
  width:  70%;
  margin:  0 auto;

}
</style>
