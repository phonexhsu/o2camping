<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h1 class="title">
            Coming Soon
          </h1>
          <h2 class="subtitle">
            $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import VideoBg from 'vue-videobg/src/VideoBackground.vue'
  export default {
    name: 'landing',
    components: {
      'video-bg': VideoBg
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    background: transparent;
  }
  .VideoBg {
    min-height: 640px;
  }

  .VideoBg__content {
    text-align: center;
    background-color: rgba(52, 72, 92, 0.7);
  }

  * {
    margin: 0;
  }

  img {
    width: 200px;
    margin-top: 120px;
  }
</style>
