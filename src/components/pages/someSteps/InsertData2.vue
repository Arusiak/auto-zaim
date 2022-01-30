<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="6">
                <v-row class="justify-center align-center mt-15">
                    <v-col cols="12">
                        <router-link :to="{name: 'insert-data1'}" style="text-decoration: none">
                            <v-icon
                                    size="20"
                                    color="green">
                                mdi-chevron-left
                            </v-icon>
                            <span>Назад</span>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row class="">
                    <v-col md="12" cols="12">
                        <v-row>
                            <v-col cols="11">
                                <h2 class="h2-bold">Заполните данные</h2>
                            </v-col>
                            <v-col cols="1">
                                <h2 class="h2-bold" style="color: #4F4F4F; opacity: 0.5;">2/2</h2>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col md="12" cols="12" class="">
                        <v-text-field
                                v-model="address"
                                :rules="addressRules"
                                outlined
                                label="Адрес регистрации"
                                class="custom-input">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col md="12" cols="12">
                        <v-checkbox class="border-green" v-model="checked">
                            <template v-slot:label>
                                <div>
                                    Адрес регистрации совпадает с местом жительства
                                </div>
                            </template>
                        </v-checkbox>
                    </v-col>
                </v-row>
                <v-row class="justify-center">
                    <v-col md="12" cols="12" v-if="checked">
                        <v-text-field
                                v-model="address2"
                                :rules="address2Rules"
                                outlined
                                label="Адрес жительства"
                                class="custom-input">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mb-15">
                    <v-col cols="12" class="mt-5">
                        <router-link :to="{name: 're-authorization'}" style="text-decoration: none">
                            <v-btn
                                    depressed
                                    class="green-btn pa-6">
                                Продолжить
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: 'InsertData2',
        data() {
            return {
                checked: false,
                address: '',
                addressRules: [
                    v => !!v || 'Address is required',
                    v => /.+@.+\..+/.test(v) || 'Address must be valid',
                ],
                address2: '',
                address2Rules: [
                    v => !!v || 'Адрес жительства is required',
                ],
            }
        },

        methods: {
            toggleDrawer() {
                this.showMenu = !this.showMenu;
            },
        },
    }
</script>