<template>
    <div>
        <div class="howWorkBG">
            <MainPart style="z-index: 1; position: relative"/>
            <img :src="phoneImg" alt="#" class="iphone-main-img">
        </div>
        <FAQ/>
        <ImproveYourWork/>
    </div>
</template>

<script>
    import FAQ from './pages/FAQ';
    import ImproveYourWork from './pages/ImproveYourWork';
    import MainPart from './pages/currentClient/MainPart';
    import phoneImg from '../assets/iPhone (1).png';

    export default {
        name: 'CurrentClient',
        components: {
            FAQ,
            ImproveYourWork,
            MainPart,
        },
        data: () => ({
            phoneImg,
        }),
    }
</script>
