<template>
<v-layout>
    <v-flex xs4>
    <panel title= "Room Metadata">
        <v-text-field
        label="Name"
        required
        :rules="[required]"
        v-model="room.name"
        ></v-text-field>

        <v-text-field
        label="Number"
        required
        :rules="[required]"
        v-model="room.number"
        ></v-text-field>
        <v-text-field
        label="Price"
        required
        :rules="[required]"
        v-model="room.price"
        ></v-text-field>
        <v-text-field
        label="NumberPers"
        required
        :rules="[required]"
        v-model="room.numberpers"
        ></v-text-field>
        <v-text-field
        label=" Image Url"
        required
        :rules="[required]"
        v-model="room.imageUrl"
        ></v-text-field>
        <v-text-field
        label="Youtube ID"
        required
        :rules="[required]"
        v-model="room.youtubeId"
        ></v-text-field>
    </panel>
    </v-flex>
    <v-flex xs8>
        <panel title="Room Structure" class="ml-2">
<v-text-field
        label="Tab"
        required
        :rules="[required]"
        multi-line
        v-model="room.tab"
        ></v-text-field>
        <v-text-field
        label="Lyrics"
        required
        :rules="[required]"
        multi-line
        v-model="room.lyrics"
        ></v-text-field>
        </panel>
        <div class="danger-alert" v-if="error">
            {{error}}
        </div>
        <v-btn
        dark
        class="cyan"
        @click="save">
        Save Room
        </v-btn>
    </v-flex>
</v-layout>
</template>

<script>
import RoomsService from '@/services/RoomsService'
export default {
  data () {
    return {
      room: {
        name: null,
        number: null,
        price: null,
        numberpers: null,
        imageUrl: null,
        youtubeId: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.room)
        .every(key => !!this.room[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      const roomId = this.$store.state.route.params.roomId
      try {
        await RoomsService.put(this.room)
        this.$router.push({
          name: 'room',
          params: {
            roomId: roomId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const roomId = this.$store.state.route.params.roomId
      this.room = (await RoomsService.show(roomId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
