<template>
  <div class="content">
    <steps></steps>

    <div class="content__hotel-and-date">
      <select name="hotels" id="hotels" class="content__hotel-and-date__hotels" v-model="hotelId">
        <option value="0">Rezervasyon Yapmak İstediğiniz Oteli Seçiniz.</option>
        <option v-for="hotel in hotels" :key="hotel.id" :value="hotelName = hotel.hotel_name">
          {{ hotel.hotel_name }}
        </option>
      </select>

      <div class="content__hotel-and-date__date">
        <div class="content__hotel-and-date__date__entry-date">
          <label for="entry-date">Giriş Tarihi</label>
          <input type="date" id="entry-date" name="entry-date" v-model="entryDate">
        </div>
        <div class="content__hotel-and-date__date__exit-date">
          <label for="exit-date">Çıkış Tarihi</label>
          <input type="date" id="exit-date" name="exit-date" v-model="exitDate">
        </div>
        <div class="content__hotel-and-date__date__number-of-adults">
          <label for="number-of-adults">Yetişkin Sayısı</label>
          <input type="number" id="number-of-adults" name="number-of-adults" v-model="numberOfAdults">
        </div>
        <div class="content__hotel-and-date__date__number-of-children">
          <label for="number-of-children">Çocuk Sayısı</label>
          <input type="number" id="number-of-children" name="number-of-children" v-model="numberOfChildren">
        </div>
      </div>

      <div class="content__hotel-and-date__button">
        <a class="content__hotel-and-date__button__save-and-continue" type="button" href="/room-type-and-view" @click="sendSelectedHotel()">Kaydet ve Devam Et</a>
      </div>
    </div>
  </div>
</template>

<script>
import steps from '../components/steps.vue'
import { eventBus } from '@/eventBus'

export default {
  name: 'HotelAndDate',

  components: {
    steps
  },

  data () {
    return {
      hotels: [],
      hotelId: null,
      hotelName: null,
      entryDate: null,
      exitDate: null,
      numberOfAdults: null,
      numberOfChildren: null
    }
  },

  created () {
    this.$http.get('https://5f6d939160cf97001641b049.mockapi.io/tkn/hotels')
      .then(response => { this.hotels = response.data })
      .then(response => { this.hotelName = response.data.hotel_name })
  },

  mounted () {
    if (localStorage.hotelId) this.hotelId = localStorage.hotelId
    if (localStorage.hotelName) this.hotelName = localStorage.hotelName
    if (localStorage.entryDate) this.entryDate = localStorage.entryDate
    if (localStorage.exitDate) this.exitDate = localStorage.exitDate
    if (localStorage.numberOfAdults) this.numberOfAdults = localStorage.numberOfAdults
    if (localStorage.numberOfChildren) this.numberOfChildren = localStorage.numberOfChildren
  },

  methods: {
    sendSelectedHotel () {
      localStorage.hotelId = this.hotelId
      localStorage.hotelName = this.hotelName
      localStorage.entryDate = this.entryDate
      localStorage.exitDate = this.exitDate
      localStorage.numberOfAdults = this.numberOfAdults
      localStorage.numberOfChildren = this.numberOfChildren
      eventBus.$emit('selected-hotel-info', this.hotelId, this.hotelName, this.entryDate, this.exitDate, this.numberOfAdults, this.numberOfChildren)
    }
  }
}
</script>
