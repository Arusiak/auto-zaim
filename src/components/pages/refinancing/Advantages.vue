<template>
    <v-container>
        <v-row class="mt-15">
            <v-col cols="12">
                <h3 class="page-title mb-5">Преимущества</h3>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <img :src="rubImg" alt="#" class="">
                <h3 class="site-h3 mt-2">Получение дополнительной суммы</h3>
                <p class="p-small mt-2">Вы получаете дополнительную сумму на руки</p>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <img :src="calendarImg" alt="#" class="">
                <h3 class="site-h3 mt-2">Уменьшение ежемесячного платежа</h3>
                <p class="p-small mt-2">Рефинансирование позволяет облегчить финансовую нагрузку</p>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <img :src="oneImg" alt="#" class="">
                <h3 class="site-h3 mt-2">Объединение нескольких кредитов в один</h3>
                <p class="p-small mt-2">Вместо множества платежей, вы сокращаете их до одного</p>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <img :src="percentImg" alt="#" class="">
                <h3 class="site-h3 mt-2">Уменьшение процентной ставки</h3>
                <p class="p-small mt-2">Вы сэкономите деньги на процентной выплате</p>
            </v-col>
            <v-col md="12" class=" mt-8" style="background: #F9F9F9">
                <v-row class="justify-center">
                    <v-col cols="6">
                        <div class="save-block">
                            <v-row class="">
                                <v-col md="8" cols="12">
                                    <h4 class="h4-green">Сохраните нас
                                        в избранном</h4>
                                    <span class="mt-1">Деньги и платежи под рукой</span>
                                </v-col>
                                <v-col md="4" cols="12">
                                    <v-btn
                                            class="outlined-btn-green mt-2"
                                            outlined>
                                        <v-icon
                                                color="black">
                                            mdi-star
                                        </v-icon>
                                        Сохранить в избранное
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import rubImg from '../../../assets/rub.png';
    import oneImg from '../../../assets/one.png';
    import percentImg from '../../../assets/percent.png';
    import calendarImg from '../../../assets/calendar.png';
    export default {
        name: 'Advantages',
        data() {
            return {
                rubImg,
                calendarImg,
                oneImg,
                percentImg
            }
        }
    }
</script>