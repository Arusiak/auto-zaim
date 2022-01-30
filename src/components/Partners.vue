<template>
    <div>
        <div class="howWorkBG">
            <MainPart style="z-index: 1; position: relative"/>
            <img :src="mainImg" alt="#" class="partners-main-img">
        </div>
        <Form class="my-10"/>
    </div>
</template>

<script>
    import Form from './pages/partners/Form';
    import MainPart from './pages/partners/MainPart';
    import mainImg from '../assets/sebastian-herrmann-GkEt4m4btLM-unsplash (1) 1.png';

    export default {
        name: 'Partners',
        components: {
            Form,
            MainPart,
        },
        data: () => ({
            mainImg,
        }),
    }
</script>
