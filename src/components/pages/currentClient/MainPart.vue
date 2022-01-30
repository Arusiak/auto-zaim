<template>
    <v-container>
        <v-row class="my-15">
            <v-col cols="12">
                <h3 class="page-title">Личный кабинет клиента</h3>
                <v-row class="mt-5">
                    <v-col md="3" cols="12">
                        <span>— Внести платеж банковской картой</span>
                    </v-col>
                    <v-col md="4" cols="12">
                        <span>— Посмотреть информацию по договору</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="3" cols="12">
                        <span>— Проверить график платежей</span>
                    </v-col>
                    <v-col md="4" cols="12">
                        <span>— Узнать сумму для полного погашения</span>
                    </v-col>
                </v-row>
                <v-btn
                    depressed
                    class="green-btn mt-10">
                    Войти
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'MainPart',
        data() {
            return {

            }
        }
    }
</script>