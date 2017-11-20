<template>
  <div>
    <transition name="scaleFade" mode="out-in" appear>
      <div v-if="!authProviders.password.linked" class="message is-warning">
        <div class="message-header">
          <p><i class="fa fa-warning"></i> 尚未設定密碼</p>
        </div>
        <div class="message-body">
          <p>To allow logging in with just your email, you need to set a password to access your account with.</p>
          <hr>
          <transition name="scaleFade" mode="out-in" appear>
            <div v-if="passwordAuthLinkingPending" class="loading-pane padded has-text-centered" key="loading">
              <i class="fa fa-spinner fa-spin fa-lg"></i>
            </div>
            <pass-form v-if="!passwordAuthLinkingPending" v-on:confirmed-password="linkAuthProviderWithCredential($event)" key="form"></pass-form>
          </transition>
        </div>
      </div>
    </transition>
    <hr>
    <transition name="scaleFadeUp" mode="out-in" appear>
      <div class="field is-grouped is-grouped-multiline">
        <div class="control"
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
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import PassForm from './PassForm'

  export default {
    name: 'LinkedAccounts',
    components: {
      'pass-form': PassForm
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        authProviders: 'authProviders',
        passwordAuthLinkingPending: 'passwordAuthLinkingPending',
        user: 'user',
        reAuthRequired: 'reAuthRequired'
      })
    },
    methods: {
      ...mapActions([
        'linkAuthProvider',
        'linkEmailAuthProvider',
        'unlinkAuthProvider'
      ]),
      linkAuthProviderWithCredential (event) {
        const email = this.user.email
        const pass = event
        const credential = {
          'email': email,
          'pass': pass
        }
        this.linkEmailAuthProvider(credential)
      }
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
