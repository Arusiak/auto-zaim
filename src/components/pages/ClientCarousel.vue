<template>
    <v-container id="client-feedback" ref="client-feedback">
        <v-row>
            <v-col>
                <h2 class="page-title">Что говорят клиенты</h2>
                <span class="page-description">
                    Что говорят о “название” сами клиенты<br/>
                    Мы публикуем только реальные отзывы
                </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <Slick style="display: flex" ref="slick" :options="slickOptions">
                    <v-col cols="12">
                        <img :src="JolieImg"/>
                        <h4>Ангелина Джоли</h4>
                        <span>Были проблемы в бизнесе и срочно понадобились деньги, к счастью что нашла вашу компанию и смогла получить под свою AUDI A8 4 000 000 рублей, Спасибо!</span>
                    </v-col>
                    <v-col cols="12">
                        <img :src="BradImg"/>
                        <h4>Брэд Питт</h4>
                        <span>Были проблемы в бизнесе и срочно понадобились деньги, к счастью что нашла вашу компанию и смогла получить под свою AUDI A8 4 000 000 рублей, Спасибо!</span>
                    </v-col>
                    <v-col cols="12">
                        <img :src="SkalaImg"/>
                        <h4>Скала Джонсон</h4>
                        <span>Были проблемы в бизнесе и срочно понадобились деньги, к счастью что нашла вашу компанию и смогла получить под свою AUDI A8 4 000 000 рублей, Спасибо!</span>
                    </v-col>
                    <v-col cols="12">
                        <img :src="JolieImg"/>
                        <h4>Ангелина Джоли</h4>
                        <span>Были проблемы в бизнесе и срочно понадобились деньги, к счастью что нашла вашу компанию и смогла получить под свою AUDI A8 4 000 000 рублей, Спасибо!</span>
                    </v-col>
                    <v-col cols="12">
                        <img :src="BradImg"/>
                        <h4>Брэд Питт</h4>
                        <span>Были проблемы в бизнесе и срочно понадобились деньги, к счастью что нашла вашу компанию и смогла получить под свою AUDI A8 4 000 000 рублей, Спасибо!</span>
                    </v-col>
                    <v-col cols="12">
                        <img :src="SkalaImg"/>
                        <h4>Скала Джонсон</h4>
                        <span>Были проблемы в бизнесе и срочно понадобились деньги, к счастью что нашла вашу компанию и смогла получить под свою AUDI A8 4 000 000 рублей, Спасибо!</span>
                    </v-col>
                </Slick>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Slick from 'vue-slick';
    import 'slick-carousel/slick/slick.css';
    import appLogo from '../../assets/logo.png';
    import SkalaImg from '../../assets/imageclient.png';
    import JolieImg from '../../assets/image 12.png';
    import BradImg from '../../assets/image 12 (1).png';
    export default {
        name: 'ClientCarousel',
        components: {
            Slick,
        },
        data() {
            return {
                appLogo,
                SkalaImg,
                JolieImg,
                BradImg,
                slickOptions: {
                    slidesToShow: 3,
                    dots: true,
                    arrows:true,
                    prevArrow: "<button class='slick-prev-btn'>&#8249;</button>",
                    nextArrow: "<button class='slick-prev-btn'>&#8250;</button>",
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: false,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                slidesToShow: 1
                            }
                        }
                    ]
                },
            }
        }
    }
</script>