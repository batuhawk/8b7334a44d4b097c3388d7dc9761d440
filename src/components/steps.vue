<template>
    <div class="steps">
      <div class="steps__steps-line"></div>
        <div class="steps__step-one">
          <font-awesome-icon icon='calendar-alt' size="4x"/>
          <span class="steps__step-one__text">OTEL VE TARİH SEÇİMİ</span>
        </div>
        <div class="steps__step-two">
          <font-awesome-icon icon='bed' size="4x"/>
          <span class="steps__step-two__text">ODA TİPİ VE MANZARA SEÇİMİ</span>
        </div>
        <div class="steps__step-three">
          <font-awesome-icon icon='credit-card' size="4x"/>
          <span class="steps__step-three__text">ÖNİZLEME VE ÖDEME İŞLEMLERİ</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Steps',

  data () {
    return {

    }
  }
}
</script>
