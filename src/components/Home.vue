<template>
  <div>
    <div class="howWorkBG">
      <MainPart style="z-index: 1; position: relative"/>
      <img :src="Car2Img" alt="#" class="car-main-img">
      <img :src="WomanImg" alt="#" class="woman-img">
    </div>
    <Calculation class="py-10"/>
    <Products class="py-10"/>
    <div class="howWorkBG py-10">
      <img :src="CarImg" alt="#" class="howWorkCar">
      <HowItWork style="z-index: 1; position: relative"/>
    </div>
    <ClientCarousel class="py-10"/>
    <ImproveYourWork/>
    <FAQ/>
  </div>
</template>

<script>
  import FAQ from './pages/FAQ';
  import ImproveYourWork from './pages/ImproveYourWork';
  import ClientCarousel from './pages/ClientCarousel';
  import HowItWork from './pages/HowItWork';
  import Products from './pages/Products';
  import Calculation from './pages/Calculation';
  import MainPart from './pages/home/MainPart';
  import CarImg from '../assets/car.png';
  import Car2Img from '../assets/main-pic.png';
  import WomanImg from '../assets/woman.png';

  export default {
    name: 'Home',
    components: {
      FAQ,
      ImproveYourWork,
      ClientCarousel,
      HowItWork,
      Products,
      Calculation,
      MainPart,
    },
    data: () => ({
      CarImg,
      Car2Img,
      WomanImg,
    }),
  }
</script>
