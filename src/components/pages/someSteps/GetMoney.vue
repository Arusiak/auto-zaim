<template>
    <v-container>
        <v-row class="mt-15 text-center">
            <v-col cols="12">
                <h2 class="h2-bold">Получить деньги</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col md="6" cols="8" class="">
                <v-text-field
                    outlined
                    label="Номер телефона"
                    class="custom-input"
                    v-model="phone"
                    :rules="phoneRules">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center mb-15" style="margin-top: -35px">
            <v-col md="6" cols="8">
                <v-checkbox class="border-green">
                    <template v-slot:label>
                        <div>
                            Согласен с
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <a
                                        class="link-green"
                                        target="_blank"
                                        @click.stop
                                        v-on="on">
                                        политикой конфиденциальности
                                    </a>
                                </template>
                                Opens in new window
                            </v-tooltip>
                        </div>
                    </template>
                </v-checkbox>
            </v-col>
            <v-col cols="12" class="mt-5">
                <router-link :to="{name: 'sms-code'}" style="text-decoration: none">
                    <v-btn
                        depressed
                        class="green-btn pa-6">
                        Продолжить
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'GetMoney',
        data() {
            return {
                phone: '',
                phoneRules: [
                    v => !!v || 'Телефон is required',
                ],
            }
        }
    }
</script>