<template>
    <v-container id="products" ref="products">
        <v-row>
            <v-col cols="12">
                <h3 class="page-title">Продукты</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6">
                <div class="save-block">
                    <h2 class="h2-site"> Деньги под ПТС автомобиля*</h2>
                    <span>
                        — до 3 лет
                    </span><br/>
                    <span>
                        — вы продолжаете пользоваться автомобилем
                    </span><br/>
                    <span>
                        — рассматриваем почти любые автомобили
                    </span><br/>
                    <span>
                        — получение денег в день обращения
                    </span><br/>
                    <span class="summary mt-5"><span style="font-size: 22px;">до</span><b>3 000 000 ₽</b></span>
                    <v-row class="align-baseline mt-5"  style="font-family: unset">
                        <v-col md="6" cols="12">
                            <router-link target= '_blank' :to="{name: 'refinancing'}" style="text-decoration: none">
                                <v-btn
                                    depressed
                                    class="green-btn">
                                    Получить
                                </v-btn>
                            </router-link>
                        </v-col>
                        <v-col md="6" cols="12">
                            <a href="#" class="site-link ml-5" style="font-weight: 700; font-family: Lato sans-serif">Подробнее</a>
                        </v-col>
                    </v-row>
                    <img :src="CarImg" alt="#" class="howWorkCar">
                </div>
            </v-col>
            <v-col md="6">
                <div class="save-block">
                    <h2 class="h2-site">Рефинансирование действующего договора на выгодных условиях </h2>
                    <span>
                        — до 3 лет
                    </span><br/>
                    <span>
                        — ставка ниже вашей текущей от 0,5 до 1%
                    </span><br>
                    <span class="summary mt-5" style="font-family: unset"><span style="font-size: 22px;">до</span> <b>3 000 000 ₽</b></span>
                    <v-row class="align-baseline mt-5">
                        <v-col md="6" cols="12">
                            <router-link target= '_blank' :to="{name: 'refinancing'}" style="text-decoration: none">
                                <v-btn
                                    depressed
                                    class="green-btn">
                                    Получить
                                </v-btn>
                            </router-link>
                        </v-col>
                        <v-col md="6" cols="12">
                            <a href="#" class="site-link ml-5"  style="font-weight: 700; font-family: Lato sans-serif">Подробнее</a>
                        </v-col>
                    </v-row>
                    <img :src="Phone" alt="#" class="howWorkCar">
                </div>
            </v-col>
            <v-col md="6" sm="6" cols="12">
                <div class="save-block">
                    <h4 class="gray-title">Аренда с выкупом </h4>
                    <p class="opacity0-5 font-lato color-4F4F4F">
                        В разработке. Скоро анонс!
                    </p>
                </div>
            </v-col>
            <v-col md="6" sm="6" cols="12">
                <div class="save-block">
                    <h4 class="gray-title">Кредит под залог автомобиля </h4>
                    <p class="opacity0-5 font-lato color-4F4F4F">
                        В разработке. Скоро анонс!
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CarImg from '../../assets/car-pts.png';
    import Phone from '../../assets/iPhone.png';

    export default {
        name: 'Products',
        data() {
            return {
                CarImg,
                Phone,
            }
        }
    }
</script>