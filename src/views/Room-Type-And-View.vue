<template>
      <div class="content">
        <steps></steps>

        <div class="content__room-type-and-view">
          <div class="content__room-type-and-view__selected-hotel">
            <div class="content__room-type-and-view__selected-hotel__name">
              <h3>{{ hotelName }}</h3>
              <span v-for="hotelDetail in hotelDetails" :key="hotelDetail[hotelId]">
                {{ hotelDetail.city}}
              </span>
            </div>
            <div class="content__room-type-and-view__selected-hotel__details">
              <span>Giriş Tarihi: {{ entryDate }}</span>
              <span>Çıkış Tarihi: {{ exitDate }}</span>
              <span>Yetişkin: {{ numberOfAdults }}</span>
              <span>Çocuk: {{ numberOfChildren }}</span>
            </div>
          </div>
          <div class="content__room-type-and-view__room-type-select"></div>
          <div class="content__room-type-and-view__view-select"></div>

        <div class="content__room-type-and-view__button">
          <a class="content__room-type-and-view__button__back" type="button" href="/hotel-and-date">Geri</a>
          <a class="content__room-type-and-view__button__save-and-continue" type="button" href="/preview-and-payment">Kaydet ve Devam Et</a>
        </div>
        </div>
      </div>
</template>

<script>
import steps from '../components/steps'
import { eventBus } from '@/eventBus'

export default {
  name: 'RoomTypeAndView',

  components: {
    steps
  },

  data () {
    return {
      hotelDetails: [],
      hotelDetailsID: null,
      hotelId: null,
      hotelName: null,
      entryDate: null,
      exitDate: null,
      numberOfAdults: null,
      numberOfChildren: null
    }
  },

  created () {
    this.$http.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotel-details')
      .then(response => { this.hotelDetails = response.data })
  },

  mounted () {
    if (localStorage.hotelId) this.hotelId = localStorage.hotelId
    if (localStorage.hotelName) this.hotelName = localStorage.hotelName
    if (localStorage.entryDate) this.entryDate = localStorage.entryDate
    if (localStorage.exitDate) this.exitDate = localStorage.exitDate
    if (localStorage.numberOfAdults) this.numberOfAdults = localStorage.numberOfAdults
    if (localStorage.numberOfChildren) this.numberOfChildren = localStorage.numberOfChildren

    eventBus.$on('selected-hotel-info', this.getSelectedHotel())
  },

  methods: {
    getSelectedHotel (selectedHotelId, selectedHotelName, selectedEntryDate, selectedExitDate, selectedNumberOfAdults, selectedNumberOfChildren) {
      localStorage.hotelId = this.selectedHotelId
      localStorage.hotelName = this.selectedHotelName
      localStorage.entryDate = this.selectedEntryDate
      localStorage.exitDate = this.selectedExitDate
      localStorage.numberOfAdults = this.selectedNumberOfAdults
      localStorage.numberOfChildren = this.selectedNumberOfChildren
    }
  }
}
</script>
