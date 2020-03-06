<template>
<v-layout>
  <v-flex xs6 v-if="isUserLoggedIn">
    <rooms-bookmarks/>
     <recently-viewed-rooms class="mt-2"/>
  </v-flex>
<v-flex :class="{
  xs12: !isUserLoggedIn,
  xs6: isUserLoggedIn
}" class="ml-2">
  <rooms-search-panel />
   <rooms-panel class="mt-2" />
  </v-flex>
  </v-layout>
</template>

<script>
import RoomsPanel from './RoomsPanel'
import RoomsBookmarks from './RoomsBookmarks'
import RoomsSearchPanel from './RoomsSearchPanel'
import RoomsService from '@/services/RoomsService'
import RecentlyViewedRooms from './RecentlyViewedRooms'
import {mapState} from 'vuex'
export default {
  components: {
    RoomsPanel,
    RoomsSearchPanel,
    RoomsBookmarks,
    RecentlyViewedRooms
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      rooms: null
    }
  },
  async mounted () {
    this.rooms = (await RoomsService.index()).data
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
