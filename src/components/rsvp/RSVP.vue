<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-16">
          <horizontal-stepper :steps="RSVPSteps" @completed-step="completeStep"
                              @active-step="isStepActive" @stepper-finished="alert"
          >
          </horizontal-stepper>
        </div>
      </div>
    </div>
  </section>
  <!-- <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">預定新行程</p>
      </header>
      <section class="modal-card-body">
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
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">離開</button>
        <button class="button is-primary">查詢</button>
      </footer>
    </div>
  </form> -->
</template>
<script>
  import HorizontalStepper from 'vue-stepper'
  import InquireStep from './Inquire.vue'
  export default {
    components: {
      HorizontalStepper
    },
    data () {
      return {
        RSVPSteps: [
          {
            icon: 'events',
            name: 'inquire',
            title: '設定行程需求',
            component: InquireStep,
            completed: false
          },
          {
            icon: 'map',
            name: 'site_select',
            title: '選擇營位',
            component: InquireStep,
            completed: false
          },
          {
            icon: 'map',
            name: 'food',
            title: '預定餐食（可選）',
            component: InquireStep,
            completed: false
          },
          {
            icon: 'map',
            name: 'rent',
            title: '租借設備（可選）',
            component: InquireStep,
            completed: false
          },
          {
            icon: 'map',
            name: 'rent',
            title: '提交預定',
            component: InquireStep,
            completed: false
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
