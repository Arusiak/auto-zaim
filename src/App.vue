<template>
  <v-app>
    <Header v-if="!scrolledToBottom" style="z-index: 2000"/>
    <Header2 v-if="scrolledToBottom" style="z-index: 2000"/>
    <v-main>
        <router-view></router-view>
      <Footer/>
    </v-main>
    <Chat/>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header";
import Header2 from "./components/layout/Header2";
import Footer from "./components/layout/Footer";
import Chat from "./components/layout/Chat";
import 'slick-carousel/slick/slick.css';

export default {
  name: 'App',

  components: {
    Footer,
    Header,
    Chat,
    Header2,
  },

  data: () => ({
    scrollpx: 0,
    scrolledToBottom: false
  }),
  methods: {
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        if(this.$route.name === 'app-home' && window.innerWidth > 959) {
          if (bottomOfWindow) {
            this.scrolledToBottom = true // replace it with your code
          } else {
            this.scrolledToBottom = false
          }
        }
      }
    }
  },
  mounted () {
    this.scroll()
  }
};

</script>
<style>
  @import url('http://fonts.googleapis.com/css?family=Lato:400,700');
 @import "style/colors.css";
 @import "style/fonts.css";
 @import "style/styles.css";

</style>