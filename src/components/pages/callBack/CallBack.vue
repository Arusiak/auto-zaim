<template>
    <v-col md="6" sm="12" cols="12" class="py-15 media-dialog">
        <v-row>
            <v-col cols="10">
                <h4 class="h4-green h4-bold">Обратный звонок</h4>
            </v-col>
            <v-col cols="1" class="px-2">
                <v-btn
                    icon
                    @click="$emit('onClose')"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-text-field
                outlined
                label="Ваше ФИО"
                class="custom-input"
                v-model="fio"
                :rules="fioRules">
        </v-text-field>
        <v-text-field
                outlined
                label="Телефон"
                class="custom-input"
                v-model="phone"
                :rules="phoneRules">
        </v-text-field>
        <v-btn
                @click.stop="dialog = true"
                depressed
                class="green-btn">
            Отправить запрос
        </v-btn>
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
        <v-dialog
                style="overflow: hidden !important;"
                class="dialog-site"
                v-model="dialog"
                max-width="50%">
            <v-card>
                <v-card-actions class="pa-0">
                    <v-row>
                        <v-col cols="6" class="hidden-sm-and-down dialogBG text-center" style="height: auto">
                            <div class="d-flex align-center justify-center" style="margin-top: 100px;">
                                <img :src="appLogo"/>
                                <span class="logo-name">AUTO<b class="text-green">zaim</b>.ru</span>
                            </div>
                            <p class="text-middle mt-3">Займы до 3 000 000 ₽ под залог авто</p>
                            <p class="text-small-black mb-15" style="margin-top: 215px;">Работаем круглосуточно, по всем городам России</p>
                        </v-col>
                        <RequestSuccess @onClose="handleCloseModal()"/>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script>
    import RequestSuccess from "../../pages/RequestSuccess";
    import appLogo from '../../../assets/logo.png';
    export default {
        name: 'CallBack',
        components: {
            RequestSuccess
        },
        props: {
            onClose: Function,

        },
        data() {
            return {
                dialog: false,
                appLogo,
                fio: '',
                fioRules: [
                    v => !!v || 'ФИО is required',
                ],
                phone: '',
                phoneRules: [
                    v => !!v || 'Телефон is required',
                ],
            }
        },
        methods: {
            handleCloseModal() {
                this.dialog = false
            }
        },
    }
</script>