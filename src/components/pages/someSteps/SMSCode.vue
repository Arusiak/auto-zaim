<template>
    <v-container>
        <v-row class="justify-center align-center mt-15">
            <v-col cols="6">
                <router-link :to="{name: 'primaryAthorization'}" target= '_blank' style="text-decoration: none">
                    <v-icon
                            size="20"
                            color="green">
                        mdi-chevron-left
                    </v-icon>
                    <span>Назад</span>
                </router-link>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="12">
               <h2 class="h2-bold">Введите код из смс</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col md="6" cols="8" class="">
                <v-text-field
                        outlined
                        label="Код из смс"
                        class="custom-input"
                        v-model="code"
                        :rules="codeRules">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center mb-15">
            <v-col cols="12" class="mt-5">
                <router-link :to="{name: 'app-home'}" style="text-decoration: none">
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
        name: 'SMSCode',
        data() {
            return {
                code: '',
                codeRules: [
                    v => !!v || 'Code is required',
                ],
            }
        }
    }
</script>