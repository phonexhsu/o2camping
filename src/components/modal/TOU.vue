<template>
  <div class="container">
    <form action="">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">請查閱我們的服務條款</p>
        </header>
        <section class="modal-card-body">
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="agreeTOU()">同意並繼續</button>
        </footer>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    agreeTOU () {
      this.$router.push({path: '/rsvp'})
      this.$modal.close()
    }
  }
}
</script>
<style lang="scss" scoped>
  .modal-card {
    width: 640px;
    height: 360px;
  }
</style>
