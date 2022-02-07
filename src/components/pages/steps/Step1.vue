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
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Сумма займа"
                                    class="custom-input"
                                    v-model="getStep1.loanSummary"
                                    :rules="loanSummaryRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" style="margin-top: -15px">
                                <v-text-field
                                    outlined
                                    label="Срок займа"
                                    class="custom-input"
                                    v-model="getStep1.loanLimit"
                                    :rules="loanLimitRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Комфортный платёж"
                                    class="custom-input"
                                    v-model="getStep1.payment"
                                    :rules="paymentRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Месячный доход"
                                    class="custom-input"
                                    v-model="getStep1.income"
                                    :rules="incomeRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Платежи по текущим кредитам"
                                    class="custom-input"
                                    v-model="getStep1.credits"
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
                                    v-model="getStep1.phone"
                                    :rules="phoneRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Номер авто"
                                    class="custom-input"
                                    v-model="getStep1.carNumber"
                                    :rules="carNumberRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="margin-top: -15px">
                            <v-col cols="12">
                                <v-text-field
                                    outlined
                                    label="Электронная почта"
                                    class="custom-input"
                                    v-model="getStep1.email"
                                    :rules="emailRules">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="" style="margin-top: -15px">
                            <v-col cols="12" class="">
                                <v-btn
                                    :disabled="!valid"
                                    depressed
                                    class="green-btn pa-6"
                                    @click="validate">
                                    Продолжить
                                </v-btn>
                            </v-col>
                        </v-row>
                        </v-form>
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
    import {mapGetters} from "vuex";

    export default {
        name: 'Step1',
        data() {
            return {
                e6: 1,
                valid: true,
                emailRules: [
                    v => !!v || 'E-mail заполните',
                    v => /.+@.+\..+/.test(v) || 'Должен быть действителен e-mail',
                ],
                incomeRules: [
                    v => !!v || 'Месячный доход заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
                phoneRules: [
                    v => !!v || 'Телефон заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
                paymentRules: [
                    v => !!v || 'Комфортный платёж заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
                loanLimitRules: [
                    v => !!v || 'Срок займа заполните',
                ],
                loanSummaryRules: [
                    v => !!v || 'Сумма займа заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
                creditsRules: [
                    v => !!v || 'Платежи по текущим кредитам заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
                carNumberRules: [
                    v => !!v || 'Номер авто заполните',
                    v =>
                        /[а-яё]+/i.test(v) || "Используйте кириллицу"
                ],
            }
        },
        computed: {
            ...mapGetters(['getStep1']),
            code:{
                get: function(){
                    return this.getStep1;
                },
                set: function(data){
                    this.$store.dispatch('setStep1', {...this.getStep1, data});
                }
            }
        },
        methods: {
            validate () {
                if ( this.$refs.form.validate() ===false  ){
                    this.$refs.form.validate()
                }else {
                    this.$router.push('/stepTwoForm');
                }
            },
        },
    }
</script>