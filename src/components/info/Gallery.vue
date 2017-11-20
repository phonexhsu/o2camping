<template>
  <section id="gallery" class="section hero is-fullheight is-widescreen">
    <div class="container">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
    </div>
  </section>
</template>
<script>
  import VueGallery from 'vue-gallery'
  export default {
    data: function () {
      return {
        images: [
          'http://www.close-2.com/sites/default/files/styles/gallery-4-columns/public/10.jpg?itok=hIlTUelf',
          'http://www.close-2.com/sites/default/files/11.jpg',
          'http://www.close-2.com/sites/default/files/styles/gallery-4-columns/public/12.jpg?itok=Swth6DiD',
          'http://www.close-2.com/sites/default/files/13.jpg',
          'http://www.close-2.com/sites/default/files/14.jpg',
          'http://www.close-2.com/sites/default/files/16.jpg',
          'http://www.close-2.com/sites/default/files/17.jpg',
          'http://www.close-2.com/sites/default/files/18.jpg',
          'http://www.close-2.com/sites/default/files/19.jpg',
          'http://www.close-2.com/sites/default/files/20.jpg',
          'http://www.close-2.com/sites/default/files/21.jpg',
          'http://www.close-2.com/sites/default/files/23.jpg',
          'http://www.close-2.com/sites/default/files/24.jpg',
          'http://www.close-2.com/sites/default/files/25.jpg'
        ],
        index: null
      }
    },
    components: {
      'gallery': VueGallery
    }
  }
</script>
