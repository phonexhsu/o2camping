<template>
  <section class="container hero is-full-height">
    <b-field label="行程期間">
      <HotelDatePicker></HotelDatePicker>
    </b-field>
    <b-field label="人數">
      <b-select
        placeholder="大小寫視為不同"
        required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </b-select>
    </b-field>
  </section>
</template>
<script>
import HotelDatePicker from 'vue-hotel-datepicker'
export default {
  components: {
    HotelDatePicker
  }
}
</script>
<style>

</style>
