<template>
    <v-container>
        <v-row class="mt-15 justify-center">
            <v-col cols="6" sm="4" md="5">
                <h2 class="h2-bold">Приветствуем, Константин</h2>
            </v-col>
        </v-row>
        <div  v-if="show">
            <v-row class="justify-center">
                <v-col cols="6" sm="4" md="5">
                    <p class="p-small">Напоминаем вам о предстоящем платеже <br/> по договору «9525215» 12.12.2021</p>
                    <p class="p-small-green mt-5">Осталось выплатить</p>
                    <h5 class="h5-bold">3 000 000 ₽</h5>
                    <p class="p-small-green mt-3">Предстоящий платёж</p>
                    <span class="h5-bold">50 000 ₽ </span>
                    <span class="text-small-gray">(1/42)</span>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="6" sm="4" md="5" class="mt-5">
                    <router-link :to="{name: 'app-home'}" style="text-decoration: none">
                        <v-btn
                            depressed
                            class="green-btn pa-6">
                            Внести оплату
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="6" sm="4" md="5">
                    <span class="span-small-black">Поддерживаемые способы оплаты</span>
                </v-col>
            </v-row>
            <v-row class="mb-15 justify-center" style="margin-top: -20px;">
                <v-col cols="6" sm="4" md="5">
                    <img :src="paymentImg"  alt="#" width="171px">
                </v-col>
            </v-row>
        </div>
        <div v-if="!show">
            <v-row class="justify-center">
                <v-col cols="6" sm="4" md="5">
                    <p class="p-small">Сейчас у вас нет активных договоров</p>
                </v-col>
            </v-row>
            <v-row class="justify-center mb-15">
                <v-col cols="6" sm="4" md="5" class="mt-5">
                    <router-link :to="{name: 'app-home'}" style="text-decoration: none">
                        <v-btn
                            depressed
                            class="green-btn pa-6">
                            Оформить
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    import paymentImg from '../../../assets/image 17.png';
    export default {
        name: 'Welcome',
        data() {
            return {
                paymentImg,
                show: this.$route.params.show ? this.$route.params.show : false,
            }
        },
    }
</script>