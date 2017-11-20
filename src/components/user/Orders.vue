<template>
  <div>
    <b-collapse class="card" :open.sync="isOpen">
      <div slot="trigger" class="card-header">
        <p class="card-header-title">
          待付訂單
        </p>
        <a class="card-header-icon">
          <b-icon :icon="isOpen ? 'angle-down' : 'angle-up'">
          </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a>#buefy</a>.
        </div>
      </div>
    </b-collapse>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isOpen: true
      }
    }
  }
</script>
