<template>
  <div>
    <b-collapse class="card" :open.sync="isOpen">
      <div slot="trigger" class="card-header">
        <p class="card-header-title">
          未完成訂單
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
      <footer class="card-footer">
        <a class="card-footer-item">刪除</a>
        <a class="card-footer-item">提交</a>
      </footer>
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
