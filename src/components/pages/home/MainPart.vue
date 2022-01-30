<template>
    <v-container>
        <v-row class="my-15">
            <v-col cols="12">
                <h3 class="page-title">Машина Вас выручит!</h3>
                <p class="page-description-big mb-6">
                    Выдаем деньги до 3 000 000 ₽ под ПТС*
                </p>
                <span>На любые цели и с любой кредитной историей</span><br/>
                <router-link :to="{name: 'primary-athorization'}" target= '_blank' style="text-decoration: none">
                    <v-btn
                        depressed
                        class="green-btn mt-10">
                        Получить
                    </v-btn>
                </router-link>
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