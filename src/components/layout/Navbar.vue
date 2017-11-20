<template>
  <div class="container">
    <nav class="navbar is-fixed-top level">
      <p class="level-item navbar-item has-text-centered panel-tabs">
        <scrollactive>
          <a class="is-active scrollactive-item" href="/#landing">回頁頂</a>
          <a href="/#story" class="scrollactive-item">不遠故事</a>
          <a href="/#gallery" class="scrollactive-item">山莊寫真</a>
          <a href="/#traffic" class="scrollactive-item">來去不遠</a>
          <a href="/#contact" class="scrollactive-item">聯絡我們</a>
        </scrollactive>
      </p>
      <p class="level-item has-text-centered control is-centered">
        <a href="/" class="navbar-item" v-if="authStatus">
        <span class="icon">
          <img src="../../assets/puff.svg" width="32px" height="32px">
        </span>
          <b-tooltip label="來這不遠" position="is-right" :active="active">
            <button class="button is-light">
              <strong>不遠</strong>露營度假山莊
            </button>
          </b-tooltip>
        </a>
        <a href="/" class="navbar-item" v-if="!authStatus">
        <span class="icon">
          <img src="../../assets/logo.svg" width="32px" height="32px">
        </span>
          <b-tooltip label="來這不遠" position="is-right" :active="active">
            <button class="button is-light">
              <strong>不遠</strong>露營度假山莊
            </button>
          </b-tooltip>
        </a>
      </p>
      <p class="navbar-item level-item has-text-centered control">
        <a class="button is-outlined is-link" @click="TOUModal()">
        <span class="icon">
          <i class="fa fa-calendar" aria-hidden="true"></i>
        </span>
          <span>選位訂餐</span>
        </a>&nbsp;
        <a class="button is-outlined is-primary" @click="LoginMethodModal()">
        <span class="icon">
          <i class="fa fa-sign-in" aria-hidden="true"></i>
        </span>
        <span>登入</span>
        </a>&nbsp;
        <a class="button is-outlined is-primary" href="/user">
        <span class="icon">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        </span>
          <span>Profile</span>
        </a>&nbsp;
        <a class="button is-outlined is-danger" href="/logout">
        <span class="icon">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </span>
          <span>登出</span>
        </a>
      </p>
    </nav>
  </div>
</template>
<script>
  import TOU from '../modal/TOU.vue'
  import LoginMethodForm from '../modal/LoginMethod.vue'
  let authStatus = true
  export default {
    components: {
      'loginmethod-form': LoginMethodForm,
      'TOU': TOU
    },
    data () {
      return {
        authStatus,
        isLandingPage: this.$router.resolve()
      }
    },
    methods: {
      LoginMethodModal () {
        this.$modal.open({
          parent: this,
          component: LoginMethodForm,
          hasModalCard: true
        })
      },
      TOUModal () {
        this.$modal.open({
          parent: this,
          component: TOU,
          hasModalCard: true
        })
      }
    },
    onMounted () {
      console.log('isLandingPage')
    }
  }
</script>
<style lang="scss" scoped>
  @import '~bulma/sass/utilities/_all';
  $navbar-background-color: whitesmoke;
  $navbar-item-img-max-height: 32px;
  @import '~bulma';
</style>
