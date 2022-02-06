<template>
    <v-container>
        <v-row>
            <v-col md="4" sm="4" cols="12">
                <p class=""><b>до <span class="page-title">90%</span></b></p>
                <span>от стоимости авто</span>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="text-center-right-media">
                <p class=""><b>от<span class="page-title">2,5%</span></b></p>
                <span>ежемесячная ставка</span>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="text-right">
                <p class="sm-text-left"><b><span class="page-title">15</span>мин.</b></p>
                <p class="sm-text-left p-small">на вынесение решения</p>
            </v-col>
        </v-row>
        <v-row class="mt-10">
            <v-col md="4" sm="12" id="terms" ref="terms">
                <v-row>
                    <v-col cols="12">
                        <h3 class="page-title">Условия</h3>
                    </v-col>
                    <v-col cols="12">
                        <p class="page-description">
                            с которыми вам комфортно
                        </p>
                    </v-col>
                    <v-col cols="12">
                    <span class="mt-2">
                        — Для физических лиц
                    </span><br/>
                        <span class="mt-2">
                        — Рассматриваем почти любые автомобили
                    </span><br/>
                        <span class="mt-2">
                       — Выдаем от 50000 р.
                    </span><br/>
                        <span class="mt-2">
                        — От 1 до 36 мес. срок договора
                    </span><br/>
                        <span class="mt-2">
                        — Автомобиль остается у вас
                    </span><br/>
                        <span class="mt-2">
                        — Возможность получить первичное одобрение онлайн
                    </span><br/>
                        <span class="pt-5">
                        — Получение денег в день обращения
                    </span><br/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col id="calculation" ref="calculation" md="8" sm="12">
                <div class="save-block">
                    <v-row>
                        <v-col cols="12"><h4 class="h2-site text-green">Калькулятор займа</h4></v-col>
                        <v-col md="6">
                            <span>Какая сумма вам нужна</span>
                            <h4 class="h4-green" style="color: #1A1D1A; font-family: unset !important;">3 000 000 ₽</h4>
                            <v-card class="slider-site">
                                <v-card-text>
                                    <v-row>
                                        <v-col class="">
                                            <v-slider
                                                outline
                                                v-model="slider"
                                                class="align-center number-slider"
                                                :max="max"
                                                :min="min"
                                                color="green"
                                                hide-details>
                                                <template v-slot:append>
                                                    <v-text-field
                                                        v-model="slider"
                                                        class="mt-0 pt-0 slider-input"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px; border: none !important;">
                                                    </v-text-field>
                                                </template>
                                            </v-slider>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            <span>На какой срок</span>
                            <h4 class="h4-green" style="color: #1A1D1A; font-family: unset !important;">7 недель</h4>
                            <v-card class="slider-site">
                                <v-card-text>
                                    <v-row>
                                        <v-col class="">
                                            <v-slider
                                                outline
                                                v-model="slider"
                                                class="align-center number-slider"
                                                :max="max"
                                                :min="min"
                                                hide-details
                                                color="green">
                                                <template v-slot:append>
                                                    <v-text-field
                                                        v-model="slider"
                                                        class="mt-0 pt-0 slider-input"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"></v-text-field>
                                                </template>
                                            </v-slider>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            <span>Ежемесячный платёж</span>
                            <h4 class="h4-green" style="color: #1A1D1A; font-family: unset !important;">3 000 ₽</h4>
                            <v-card class="slider-site">
                                <v-card-text>
                                    <v-row>
                                        <v-col class="">
                                            <v-slider
                                                outline
                                                v-model="slider"
                                                class="align-center number-slider"
                                                :max="max"
                                                :min="min"
                                                hide-details
                                                color="green">
                                                <template v-slot:append>
                                                    <v-text-field
                                                        v-model="slider"
                                                        class="mt-0 pt-0 slider-input"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"></v-text-field>
                                                </template>
                                            </v-slider>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="6">
                            <span class="mt-4">Сумма процентов по ставке 2,5%</span><br/>
                            <b class="summary" style="font-family: unset !important;">300 000 ₽</b><br>
                            <span class="mt-4">Сумма к выплате</span><br/>
                            <b class="summary" style="font-family: unset !important;">3 000 000 ₽</b><br/>
                            <v-btn
                                depressed
                                class="green-btn mt-4">
                                Получить
                            </v-btn>
                            <v-checkbox class="border-green">
                                <template v-slot:label>
                                    <div>
                                        Нажимая на кнопку я соглашаюсь с условиями
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <a
                                                    class="link-green"
                                                    target="_blank"
                                                    href="https://vuetifyjs.com"
                                                    @click.stop
                                                    v-on="on">
                                                    политики конфиденициальности
                                                </a>
                                            </template>
                                            Opens in new window
                                        </v-tooltip>
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

    export default {
        name: 'Calculation',
        data() {
            return {
                min: -50,
                max: 90,
                slider: 40,
            }
        }
    }
</script>