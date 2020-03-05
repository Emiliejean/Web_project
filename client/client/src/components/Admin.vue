<template>
<v-container>
    <h1> ADMIN </h1>
    <v-btn
        dark
        class="cyan"
        :to="{
          name: 'song-edit',
          params () {
            return {
            songId: song.id
            }
          }
            }">
        Edit
        </v-btn>
         <div
      v-for="song in songs"
      class="song"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
<div class="song-title">
  {{song.title}}
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
    ...mapState(['song'])
  }
}
</script>

<style scoped>
.flex-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, 33%);
}
</style>
