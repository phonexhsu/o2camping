<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title has-text-centered">選擇登入方式</p>
      </header>
      <section class="modal-card-body">
        <p class="control">
          <button class="button icon is-large is-dark">
            <i class="fa fa-inbox" @click="emailLogin()"></i>
          </button>
          <button class="button icon is-large is-info">
            <i class="fa fa-facebook" @click=""></i>
          </button>
          <button class="button icon is-large is-danger">
            <i class="fa fa-google" @click=""></i>
          </button>
          <button class="button icon is-large is-success">
            <i class="fa fa-phone" @click=""></i>
          </button>
        </p>
      </section>
    </div>
  </form>
</template>
<script>
  import AuthForm from './Auth.vue'
export default {
    methods: {
      emailLogin () {
        this.$modal.open({
          parent: this,
          component: AuthForm,
          hasModalCard: true
        })
        window.close()
      }
    }
}
</script>
<style lang="scss" scoped>
  // ＠import '~firebaseui/dist/firebaseui.css';
  .modal-card {
    width: auto;
  }
</style>
