<template>
    <v-container>
        <v-row class="text-center mt-15">
            <v-col cols="12">
                <h2 class="page-title" style="font-family: unset"><b>Займы до 3 000 000 ₽</b></h2>
            </v-col>
        </v-row>
        <v-row class="justify-center mt-5 text-center">
            <v-col cols="6" class="">
                <p class="text-middle">На любые цели и с любой <br/>кредитной историей</p>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center mb-15">
            <v-col cols="12" class="mt-5">
                <router-link :to="{name: 'welcome-home', params: { show: false }}" style="text-decoration: none">
                    <v-btn
                        v-if="!alreadyPaid"
                        depressed
                        class="green-btn pa-6">
                        Продолжить оформление
                    </v-btn>
                </router-link>
                <router-link :to="{name: 'welcome-home', params: { show: true }}" style="text-decoration: none">
                    <v-btn
                        v-if="alreadyPaid"
                        depressed
                        class="green-btn pa-6"
                        style="padding: 24px 63px !important;">
                        Оформить
                    </v-btn>
                </router-link>
            </v-col>
            <v-col cols="12" class="mt-3">
                <router-link :to="{name: 'app-home'}" style="text-decoration: none; ">
                    <v-btn
                        v-if="!alreadyPaid"
                        class="outlined-btn-green pa-6"
                        style="padding: 24px 53px !important;"
                        outlined>
                        Личный кабинет
                    </v-btn>
                    <v-btn
                        v-else
                        class="outlined-btn-green pa-6"
                        outlined>
                        Личный кабинет
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'ReAuthoriation',
        data() {
            return {
                alreadyPaid: true,
            }
        }
    }
</script>