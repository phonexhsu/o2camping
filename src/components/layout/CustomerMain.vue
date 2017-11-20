<template>
  <div class="container">
    <div v-bar="{
      useScrollbarPseudo: true,
      scrollThrottle: 30,
      preventParentScroll: true,
      unselectableBody: true
    }">
      <div>
        <Landing id="landing"></Landing>
        <Story id="story"></Story>
        <Gallery id="gallery"></Gallery>
        <Traffic id="traffic"></Traffic>
        <Contact id="contact"></Contact>
      </div>
    </div>
  </div>
</template>

<script>
  import Landing from '../info/Landing.vue'
  import Gallery from '../info/Gallery.vue'
  import Contact from '../info/Contact.vue'
  import Traffic from '../info/Traffic.vue'
  import Story from '../info/Story.vue'
export default {
    name: 'customermain',
    components: {
      Landing,
      Gallery,
      Traffic,
      Contact,
      Story
    },
    data () {
      return {
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // @import './normalize.scss';

.nav.is-fixed {
  position: fixed;
  left: 0;
  right: 0;

  .is-active {
    color: #00d1b2;
  }
}

.section {
  padding-top: 100px;
}

.buttons {
  position: fixed;
  z-index: 10;
  top: 100px;
  right: 100px;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: #7a7a7a;

  label {
    display: block;
  }

  input,
  button {
    display: block;
    width: 100%;
    height: 42px;
    padding: 10px 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    // border: 0;
    border: 2px solid #00d1b2;
    border-radius: 10px;
    font-weight: 600;
    outline: 0;
    transition: all .1s;
  }

  button {
    background-color: #00d1b2;
    cursor: pointer;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #00d1b2;
    }
  }
}
  .vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;
  }

  .vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
      background-color 100ms ease-out,
      margin 100ms ease-out,
      height 100ms ease-out;
    transition:
      background-color 100ms ease-out,
      margin 100ms ease-out,
      height 100ms ease-out;
    background-color: rgba(48, 121, 244,.1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
  }

  .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.3);
  }

  .vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
  }
</style>
