<template>
    <div class="top-border-opacity">
        <v-container>
            <v-row class="my-5">
                <v-col md="6" sm="6" cols="12">
                    <p class="font-lato opacity0-5">
                        <a href="mailto:steve@scdware.com"
                           class="text-decoration-none color-4F4F4F">
                            ООО «Название компании»
                        </a>
                    </p>
                </v-col>
                <v-col md="3" sm="6" cols="12">
                    <p class="font-italic opacity0-5 font-lato text-align-right text-left-col">
                        <a href="mailto:steve@scdware.com" class="color-4F4F4F">Политика конфиденциальности</a>
                    </p>
                </v-col>
                <v-col md="3" sm="12" cols="12">
                    <p class="font-italic opacity0-5 font-lato text-align-right text-left-col">
                        <a href="mailto:steve@scdware.com" class="color-4F4F4F">Обработка персональных данных</a>
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>