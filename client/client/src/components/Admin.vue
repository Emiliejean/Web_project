<template>
<v-container>
    <h1> ADMIN </h1>
    <v-btn
        dark
        class="cyan"
        :to="{
          name: 'room-edit',
          params () {
            return {
            roomId: room.id
            }
          }
            }">
        Edit
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

  </v-flex>
      </v-layout>
 <div> Show Edit Delete </div>
        </div>
</v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['room'])
  }
}
</script>

<style scoped>
.flex-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, 33%);
}
</style>
