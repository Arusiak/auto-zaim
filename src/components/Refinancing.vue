<template>
    <div>
        <div class="howWorkBG">
            <MainPart style="z-index: 1; position: relative"/>
            <img :src="mainImg" alt="#" class="woman-img">
        </div>
        <Advantages class="my-10"/>
        <FAQ class="my-10"/>
    </div>
</template>

<script>
    import FAQ from './pages/FAQ';
    import MainPart from './pages/refinancing/MainPart';
    import mainImg from '../assets/young-happy-woman.png';
    import Advantages from "./pages/refinancing/Advantages";

    export default {
        name: 'Refinancing',
        components: {
            FAQ,
            MainPart,
            Advantages,
        },
        data: () => ({
            mainImg,
        }),
    }
</script>
