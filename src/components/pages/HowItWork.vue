<template>
    <v-container id="how-it-works" ref="how-it-works">
        <v-row>
            <v-col>
                <h2 class="page-title">Как это работает</h2>
                <span class="page-description">
                    На всю процедуру - 30-45 мин
                </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3" sm="6" cols="12">
                <v-row>
                    <v-col cols="6">
                        <h3 class="site-h3">Оформление</h3>
                    </v-col>
                    <v-col cols="6">
                        <h2 class="works-number">
                            01
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <span>Оформляете заявку на сайте или в нашем офисе</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <v-row>
                    <v-col cols="6">
                        <h3 class="site-h3">Анализ</h3>
                    </v-col>
                    <v-col cols="6">
                        <h2 class="works-number">
                            02
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <span>Проводим справедливую оценку и оглашаем сумму</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <v-row>
                    <v-col cols="6">
                        <h3 class="site-h3">Договор</h3>
                    </v-col>
                    <v-col cols="6">
                        <h2 class="works-number">
                            03
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <span>Заключаем с Вами договоры (ДКП и ДФА)</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="3" sm="6" cols="12">
                <v-row>
                    <v-col cols="6">
                        <h3 class="site-h3">Оплата</h3>
                    </v-col>
                    <v-col cols="6">
                        <h2 class="works-number">
                            04
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <span>Сразу получаете деньги на карту или счет</span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="align-center">
            <v-col md="3" cols="12">
                <v-btn
                    depressed
                    class="green-btn">
                    Получить
                </v-btn>
            </v-col>
            <v-col md="8" cols="12">
                <span>Будет быстрее! Просто <span class="site-link">прикрепите</span> необходимые документы в заявку:<br/> Паспорт, ПТС, СТС. Мы за экономию вашего драгоценного времени!</span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'HowItWork',
        data() {
            return {

            }
        }
    }
</script>