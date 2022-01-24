<template>
  <div id="app">
    <Header />
    <!--Route lazy Loading effect-->
    <v-dialog
            max-width="64px">
      <v-card>
        <v-card-text class="global-loader">
          <v-progress-circular
                  indeterminate></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-main>
      <router-view></router-view>
      <Footer />
    </v-main>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
