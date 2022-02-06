<template>
    <v-container id="feedback" ref="feedback">
        <v-row>
            <v-col>
                <h2 class="page-title">Расскажите как нам улучшить свою работу</h2>
                <span class="page-description">
                    Просим вас написать, что понравилось, а что не очень - мы исправим<br/> наши нюансы и закрепим положительные результаты еще четче
                </span>
            </v-col>
        </v-row>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
            <v-row>
                <v-col md="7" sm="12">
                    <v-row class="mt-0">
                        <v-col md="12">
                            <v-text-field
                                outlined
                                label="Ваше ФИО"
                                class="custom-input"
                                v-model="Fio"
                                :rules="fioRules">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mt-0">
                        <v-col md="6" sm="6" cols="12">
                            <v-text-field
                                outlined
                                label="Телефон"
                                class="custom-input"
                                v-model="phone"
                                :rules="phoneRules">
                            </v-text-field>
                        </v-col>
                        <v-col md="6" sm="6" cols="12">
                            <v-text-field
                                outlined
                                v-model="email"
                                :rules="emailRules"
                                label="Email"
                                class="custom-input">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mt-0">
                        <v-col md="12">
                            <v-textarea
                                label="Ваше сообщение"
                                auto-grow
                                outlined
                                class="custom-input"
                                v-model="sms"
                                :rules="smsRules">
                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col md="5" class="hidden-sm-and-down">
                    <div class="save-block height-100 d-flex flex-column justify-center">
                        <h4 class="bold-l-text-green">Сохраните нас
                            в избранном</h4>
                        <span class="mt-1">Деньги и платежи под рукой</span>
                        <v-btn
                            class="outlined-btn-green mt-2 font-14-text"
                            outlined
                            style="width: 100%">
                            <v-icon
                                color="black">
                                mdi-star
                            </v-icon>
                            Сохранить в избранное
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row class="align-center mt-0">
                <v-col md="2" sm="12" cols="12">
                    <v-btn
                        @click="validate"
                        depressed
                        class="green-btn">
                        Отправить
                    </v-btn>
                </v-col>
                <v-col md="9" sm="11" cols="11" class="ml-3">
                    <v-checkbox
                        class="border-green"
                        v-model="checkbox"
                        :rules="[v => !!v || 'приветствую продолжение!']">
                        <template v-slot:label>
                            <div>
                                Я даю своё
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <a
                                            class="link-green"
                                            target="_blank"
                                            href="https://vuetifyjs.com"
                                            @click.stop
                                            v-on="on">
                                            согласие
                                        </a>
                                    </template>
                                    Opens in new window
                                </v-tooltip>
                                на обработку своих персональных данных в соответствии с Федеральным законом «О персональных данных» от 27.07.2006 N 152-ФЗ
                            </div>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>
        </v-form>
        <v-row class="d-xl-none d-md-none d-lg-none d-sm-block mt-0">
            <v-col cols="12">
                <div class="save-block">
                    <v-row>
                        <v-col sm="6" cols="12">
                            <h4 class="h4-green">Сохраните нас
                                в избранном</h4>
                            <span class="mt-1">Деньги и платежи под рукой</span>
                        </v-col>
                        <v-col sm="6" cols="12">
                            <v-btn
                                style="width: 100%"
                                class="outlined-btn-green font-14-text-media"
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
    </v-container>
</template>

<script>
    export default {
        name: 'ImproveYourWork',
        data() {
            return {
                valid: true,
                email: '',
                checkbox: false,
                emailRules: [
                    v => !!v || 'E-mail заполните',
                    v => /.+@.+\..+/.test(v) || 'Должен быть действителен e-mail',
                ],
                sms: '',
                smsRules: [
                    v => !!v || 'сообщение заполните',
                ],
                phone: '',
                phoneRules: [
                    v => !!v || 'Телефон заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
                Fio: '',
                fioRules: [
                    v => !!v || 'ФИО заполните',
                ],
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