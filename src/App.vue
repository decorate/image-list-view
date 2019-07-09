<template>
  <div id="app">
      <image-list-view
              :images="list">
      </image-list-view>
  </div>
</template>

<script>
    import ImageListView from './components/ImageListView'
    import  ImageUploadable from './models/Parents/ImageUploadable'


    export default {
        data() {
            return {
                list: [new ImageUploadable()],
            }
        },
        components: {
            ImageListView
        }
    }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
