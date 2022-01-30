<template>
    <v-container>
        <v-row class="my-15 justify-center">
            <v-col md="6" sm="10" cols="12">
                <v-stepper
                        v-model="e6"
                        vertical
                        class="stepper-site">
                    <v-stepper-step
                        :complete="e6 > 1"
                        step="1"
                        class="text-middle">
                        Рефинансирование
                    </v-stepper-step>

                    <v-stepper-content step="1">
                        <v-row class="">
                            <v-col cols="12">
                                <v-row>
                                    <v-col cols="10">
                                        <h2 class="h2-bold">Заполните данные</h2>
                                    </v-col>
                                    <v-col cols="1">
                                        <h2 class="h2-bold" style="color: #4F4F4F; opacity: 0.5;">1/2</h2>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Сумма займа"
                                    class="custom-input"
                                    v-model="zaimSummary"
                                    :rules="zaimSummaryRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" style="margin-top: -15px">
                                <v-text-field
                                    outlined
                                    label="Срок займа"
                                    class="custom-input"
                                    v-model="zaimLimit"
                                    :rules="zaimLimitRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Комфортный платёж"
                                    class="custom-input"
                                    v-model="platoj"
                                    :rules="platojRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Месячный доход"
                                    class="custom-input"
                                    v-model="doxod"
                                    :rules="doxodRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Платежи по текущим кредитам"
                                    class="custom-input"
                                    v-model="credits"
                                    :rules="creditsRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Дополнительный телефон"
                                    class="custom-input"
                                    v-model="phone"
                                    :rules="phoneRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Номер авто"
                                    class="custom-input">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Электронная почта"
                                    class="custom-input"
                                    v-model="email"
                                    :rules="emailRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="" style="margin-top: -15px">
                            <v-col cols="12" class="">
                                <router-link :to="{name: 'insert-data2'}" style="text-decoration: none">
                                    <v-btn
                                        depressed
                                        class="green-btn pa-6">
                                        Продолжить
                                    </v-btn>
                                </router-link>
                            </v-col>
                        </v-row>
                    </v-stepper-content>

                    <v-stepper-step
                        :complete="e6 > 2"
                        step="2"
                        class="text-middle">
                        Займ под ПТС
                    </v-stepper-step>

                    <v-stepper-content step="2">

                    </v-stepper-content>

                    <v-stepper-step
                        :complete="e6 > 3"
                        step="3"
                        class="text-middle">
                        Аренда с выкупом
                    </v-stepper-step>

                    <v-stepper-content step="3">

                    </v-stepper-content>
                    <v-stepper-step
                        :complete="e6 > 4"
                        step="4"
                        class="text-middle">
                        Кредит под залог автомобиля
                    </v-stepper-step>

                    <v-stepper-content step="4">

                    </v-stepper-content>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'InsertData1',
        data() {
            return {
                e6: 1,
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                doxod: '',
                doxodRules: [
                    v => !!v || 'Месячный доход is required',
                ],
                phone: '',
                phoneRules: [
                    v => !!v || 'Телефон is required',
                ],
                platoj: '',
                platojRules: [
                    v => !!v || 'Комфортный платёж is required',
                ],
                zaimLimit: '',
                zaimLimitRules: [
                    v => !!v || 'Срок займа is required',
                ],
                zaimSummary: '',
                zaimSummaryRules: [
                    v => !!v || 'Сумма займа is required',
                ],
                credits: '',
                creditsRules: [
                    v => !!v || 'Платежи по текущим кредитам is required',
                ],
            }
        },
    }
</script>