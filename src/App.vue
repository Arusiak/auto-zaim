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
  // methods: {
  //   handleScroll() {
  //     this.scrollpx = window.scrollY;
  //   }
  // },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
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

  // window.addEventListener("scroll", function () {
  //     let header = document.querySelector(".header1");
  //     let header2 = document.querySelector(".header2");
  //     header.classList.toggle("d-none", window.scrollY > 0)
  //     header2.classList.toggle("d-block", window.scrollY > 0)
  //   })
  // }
};

</script>
<style>
 @import "style/colors.css";
 @import "style/fonts.css";
 @import "style/styles.css";
</style>