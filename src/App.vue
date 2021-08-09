<template>
  <div id="app">
    <hotel-header></hotel-header>

    <router-view></router-view>
  </div>
</template>

<script>
import HotelHeader from './components/hotel-header.vue'

export default {

  name: 'App',

  components: {
    HotelHeader
  },

  data () {
    return {

    }
  }
}
</script>
