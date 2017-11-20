<template>
    <form action="">
      <div class="modal-card">
        <section class="modal-card-body">
          <b-field label="e-mail">
            <b-input
              type="email"
              v-model="email"
              placeholder="abc@17camping.tw"
              required>
            </b-input>
          </b-field>
          <b-field label="密碼">
            <b-input
              type="password"
              v-model="password"
              password-reveal
              placeholder="大小寫視為不同"
              required>
            </b-input>
          </b-field>
          <b-checkbox>記得我</b-checkbox>
          <div id="firebaseui-auth-container"></div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">關閉</button>
          <button class="button is-primary">登入</button>
        </footer>
      </div>
    </form>
</template>
<script>
  export default {
    props: ['email', 'password']
  }
</script>

<style scoped>
  .modal-card {
    width: auto;
  }
</style>
