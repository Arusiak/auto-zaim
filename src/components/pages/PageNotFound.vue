<template>
    <div>
        <div class="backImg">
            <v-container>
                <v-row class="my-15 justify-end">
                    <v-col md="6" sm="8" cols="12">
                        <h1 class="page-title">Такая страница не найдена</h1>
                        <span class="page-description">
                            Возможно ведутся технические работы <br/> или страница была удалена
                        </span><br/>
                        <v-btn
                            depressed
                            class="green-btn mt-5"
                            :to="{name: 'app-home'}">
                            На главную
                        </v-btn>
                    </v-col>
                    <v-col md="6" sm="4" cols="6" class="text-align-right">
                        <p class="404">
                            <v-img
                                :src="errLogo"
                            />
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <FAQ/>
    </div>
</template>

<script>
    import errLogo from '../../assets/404.png';
    import FAQ from './FAQ'
    export default {
        name: 'PageNotFound',
        components: {
            FAQ,
        },
        data() {
            return {errLogo}
        }
    }
</script>