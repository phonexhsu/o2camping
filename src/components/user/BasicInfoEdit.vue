<template>
  <div class="container">
    <hr>
    <p class="subtitle">聯絡資訊</p>
    <transition name="scaleFadeUp" mode="out-in" appear>
      <div class="field is-grouped is-grouped-multiline">
        <!-- <div class="control"
             v-for="(provider, index) in authProviders"
             v-bind:index="index"
             v-bind:key="provider.id"
        >
          <div class="tags has-addons">
            <span v-if="provider.id !== 'password'" class="tag is-dark">
              <i :class="{
                'fa fa-facebook': provider.id === 'facebook',
                'fa fa-google': provider.id === 'google'
                 }">
              </i></span>
            <span v-if="provider.id === 'password'" class="tag is-dark"><i class="fa fa-lock">&nbsp;</i>Email/密碼</span>
            <transition name="scaleFade" mode="out-in" appear>
              <span v-if="provider.linked === true" class="tag is-success" key="linked">已綁定</span>
              <span v-if="provider.linked === false" class="tag is-light"  key="unlinked">未設定</span>
            </transition>
            <transition name="scaleFade" mode="out-in" appear>
              <a v-if="provider.linked === false && provider.id !== 'password'" class="tag is-warning" @click="linkAuthProvider(provider.id)" key="link">加綁</a>
              <a v-if="provider.linked === true" class="tag is-delete is-warning" @click="unlinkAuthProvider(provider.id)" key="unlink"></a>
            </transition>
          </div>
        </div> -->
        <p class="block">
          <b-icon
            pack="fa"
            icon="user">
          </b-icon>
          <span>姓名</span>
          <span>{{user.surname}}{{user.name}}</span>
        </p>
        <p class="block">
          <b-icon
            pack="fa"
            icon="mobile">
          </b-icon>
          <span>手機</span>
        </p>
        <p class="block">
          <b-icon
            pack="fa"
            icon="home">
          </b-icon>
          <span>住址</span>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'LinkedAccounts',
    components: {
    },
    data () {
      return {
        'surname': this.user.displayName
      }
    },
    computed: {
      ...mapGetters({
        user: 'user',
        reAuthRequired: 'reAuthRequired'
      })
    },
    methods: {
      ...mapActions([
        'linkAuthProvider',
        'linkEmailAuthProvider',
        'unlinkAuthProvider'
      ])
    }
  }
</script>

<style lang="scss" scoped>

  .padded {
    padding:10px;
  }

  .scaleFade-enter-active, .scaleFade-leave-active {
    opacity: 1;
    transform: scale(1);
    transition: all .25s ease-in-out;
  }
  .scaleFade-enter, .scaleFade-leave-active {
    opacity: 0;
    transform:scale(1.1);
  }

  .scaleFadeUp-enter-active, .scaleFadeUp-leave-active {
    opacity: 1;
    transform: scale(1.0);
    transition: all .25s ease-in-out;
  }
  .scaleFadeUp-enter, .scaleFadeUp-leave-active {
    opacity: 0;
    transform:scale(0.9);
  }
</style>
