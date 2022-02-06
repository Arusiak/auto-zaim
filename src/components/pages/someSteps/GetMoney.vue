<template>
    <v-container>
        <v-row class="mt-15 text-center">
            <v-col cols="12">
                <h2 class="h2-bold">Получить деньги</h2>
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
                        label="Номер телефона"
                        class="custom-input"
                        v-model="phone"
                        :rules="phoneRules">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="justify-center text-center mb-15" style="margin-top: -35px">
                <v-col md="6" cols="8">
                    <v-checkbox
                        class="border-green"
                        v-model="checkbox"
                        :rules="[v => !!v || 'приветствую продолжение!']">
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
                    <v-btn
                        @click="validate"
                        depressed
                        class="green-btn pa-6">
                        Продолжить
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: 'GetMoney',
        data() {
            return {
                checkbox: false,
                phone: '',
                phoneRules: [
                    v => !!v || 'Телефон заполните',
                    v => Number.isInteger(Number(v)) || "Значение должно быть числом",
                ],
            }
        },
        methods: {
            validate () {
                if ( this.$refs.form.validate() === false ){
                    this.$refs.form.validate()
                }else {
                    this.$router.push('/smsCode');
                }
            },
        },
    }
</script>