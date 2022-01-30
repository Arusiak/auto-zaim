<template>
    <v-container>
        <v-row class="mt-5 mb-15 pt-5">
            <v-col cols="12">
                <router-link :to="{name: 'app-home'}" style="text-decoration: none">
                    <span class="text-small-black" style="font-style: normal">
                    Главная
                    </span>
                </router-link>
                <v-icon size="20">
                    mdi-chevron-right
                </v-icon>
                <router-link :to="{name: 'refinancing'}" style="text-decoration: none">
                    <span class="text-small-black" style="font-style: normal">
                    Деньги под ПТС
                    </span>
                </router-link>
                <h3 class="page-title mb-5 mt-10">
                    Рефинансирование
                </h3>
                <p class="page-description-big">Объедините несколько кредитов в один</p>
                <v-btn
                    depressed
                    class="green-btn mt-10">
                    Получить
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