<template>
 <panel name="Room Metadata">
   <v-layout>
        <v-flex xs6>
<div class="room-name">
  {{room.name}}
</div>
<div class="room-number">
  <p> room number : {{room.number}} </p>
</div>
<div class="room-price">
  <p> price : {{room.price}} </p>
</div>

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

        <v-btn
        v-if="isUserLoggedIn && !bookmark"
        dark
        class="cyan"
         @click="setAsBookmark">
        Set As Bookmark
        </v-btn>

         <v-btn
          v-if="isUserLoggedIn && bookmark"
        dark
        class="cyan"
         @click="unsetAsBookmark">
        Unset As Bookmark
        </v-btn>
        </v-flex>
          <v-flex xs6>
<img class="imageurl" :src="room.imageUrl"/>
<br>
{{room.price}}
        </v-flex>
        </v-layout>
      </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'room'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async room () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          roomId: this.room.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          roomId: this.room.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
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
  width:  100%;
 margin:  0 auto;
}
</style>
