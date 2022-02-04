<template>
    <v-col md="6" sm="12" cols="12" class="py-15 media-dialog">
        <v-row>
            <v-col cols="10">
                <h4 class="h4-green h4-bold">Запрос отправлен!</h4>
            </v-col>
            <v-col cols="1">
                <v-btn
                    icon
                    @click="$emit('onClose')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <span class="mt-5">Наш специалист скоро свяжется <br/> с Вами! </span><br/>
        <v-btn
                depressed
                class="green-btn"
                @click="$emit('onClose')">
            Закрыть
        </v-btn>
    </v-col>
</template>

<script>
    export default {
        name: 'RequestSuccess',
        data() {
            return {
                dialog: false,
            }
        },
        props: {
            onClose: Function,

        },
        methods: {
            validate () {
                if ( this.$refs.form.validate() ===false  ){
                    this.$refs.form.validate()
                }else {
                    this.$router.push('/reAuthorization');
                }
            },
        },
    }
</script>