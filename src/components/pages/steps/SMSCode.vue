<template>
    <v-container>
        <v-row class="justify-center align-center mt-15">
            <v-col cols="6">
                <router-link :to="{name: 'primary-athorization'}" style="text-decoration: none">
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
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
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
                    <v-btn
                        :disabled="!valid"
                        depressed
                        @click="validate"
                        class="green-btn pa-6">
                        Продолжить
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'SMSCode',
        data() {
            return {
                valid: true,
                codeRules: [
                    v => !!v || 'Code заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
            }
        },
        computed: {
            ...mapGetters(['getSmsCode']),
            code:{
                get: function(){
                    return this.getSmsCode;
                },
                set: function(code){
                    this.$store.dispatch('setSmsCode', code);
                }
            }
        },
        methods: {
            validate () {
                if ( this.$refs.form.validate() === false ){
                    this.$refs.form.validate()
                }else {
                    this.$router.push('/');
                }
            },
        },
    }
</script>