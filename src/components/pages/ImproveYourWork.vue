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
        <v-row>
            <v-col md="8" sm="12">
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
                    <v-col md="6">
                        <v-text-field
                            outlined
                            label="Телефон"
                            class="custom-input"
                            v-model="phone"
                            :rules="phoneRules">
                        </v-text-field>
                    </v-col>
                    <v-col md="6">
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
            <v-col md="4" class="hidden-sm-and-down">
                <div class="save-block">
                    <h4 class="bold-l-text-green">Сохраните нас
                        в избранном</h4>
                    <span class="mt-1">Деньги и платежи под рукой</span>
                    <v-btn
                        class="outlined-btn-green mt-2"
                        outlined>
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
                    depressed
                    class="green-btn">
                    Отправить
                </v-btn>
            </v-col>
            <v-col md="9" sm="12" cols="12" class="ml-3">
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
                        <v-col sm="6" cols="12">
                            <h4 class="h4-green">Сохраните нас
                                в избранном</h4>
                            <span class="mt-1">Деньги и платежи под рукой</span>
                        </v-col>
                        <v-col sm="6" cols="12">
                            <v-btn
                                class="outlined-btn-green"
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
                Fio: '',
                fioRules: [
                    v => !!v || 'ФИО is required',
                ],
            }
        }
    }
</script>