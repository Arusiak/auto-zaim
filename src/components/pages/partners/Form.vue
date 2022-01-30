<template>
    <v-container id="partnersForm" ref="partnersForm">
        <v-row>
            <v-col>
                <h2 class="page-title">Заявка на сотрудничество</h2>
            </v-col>
        </v-row>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
        <v-row>
            <v-col md="8" sm="12">
                <v-row class="mt-0">
                    <v-col md="6" cols="12">
                        <v-text-field
                            outlined
                            v-model="Fio"
                            :rules="fioRules"
                            label="Ваше ФИО"
                            class="custom-input">
                        </v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-text-field
                            outlined
                            v-model="sfera"
                            :rules="sferaRules"
                            label="Сфера деятельности"
                            class="custom-input">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mt-0">
                    <v-col md="6" cols="12">
                        <v-text-field
                            outlined
                            v-model="phone"
                            :rules="phoneRules"
                            label="Телефон"
                            class="custom-input">
                        </v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
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
                            v-model="sms"
                            :rules="smsRules"
                            required
                            label="Ваше сообщение"
                            auto-grow
                            outlined
                            class="custom-input"></v-textarea>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="4" class="hidden-sm-and-down">
                <div class="save-block">
                    <h4 class="h4-green">Мы дадим ответ в кратчайшие сроки</h4>
                </div>
            </v-col>
        </v-row>
        <v-row class="align-center mt-0">
            <v-col md="2" sm="12" cols="12">
                <v-btn
                    depressed
                    class="green-btn"
                    @click="submit">
                    Отправить
                </v-btn>
            </v-col>
            <v-col md="9" sm="12" cols="12">
                <v-checkbox class="border-green">
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
        <v-row class="d-xl-none d-md-none d-lg-none d-sm-block mt-0">
            <v-col cols="12">
                <div class="save-block">
                    <v-row>
                        <v-col cols="12">
                            <h4 class="h4-green">Мы дадим ответ в кратчайшие сроки</h4>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                sms: '',
                smsRules: [
                    v => !!v || 'сообщение is required',
                ],
                phone: '',
                phoneRules: [
                    v => !!v || 'Телефон is required',
                ],
                sfera: '',
                sferaRules: [
                    v => !!v || 'Сфера деятельности is required',
                ],
                Fio: '',
                fioRules: [
                    v => !!v || 'ФИО is required',
                ],
            }
        },
        methods: {
            submit() {
                this.$refs.form.validate()
            }
        }
    }
</script>