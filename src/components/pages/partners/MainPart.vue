<template>
    <v-container>
        <v-row class="my-15">
            <v-col cols="12">
                <h3 class="page-title mb-5">
                    Мы уважаем и ценим каждого нашего<br/> партнера!
                </h3>
                <span class="page-description">Вы:</span><br/>
                <span> — Поставляете клиентов, которые готовы <br/>воспользоваться нашим продуктом</span><br/>
                <span class="page-description">Мы:</span><br/>
                <span> — Хорошо платим!</span><br/>
                <v-btn
                    depressed
                    class="green-btn mt-10"
                    @click="scrollTo(ref)">
                    Заполнить заявку
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
                ref: "partnersForm",
            }
        },
        methods: {
            scrollTo(refName) {
                const element = document.querySelector(`#${refName}`);
                if (element) {
                    element.scrollIntoView({behavior: "smooth"});
                }
            }
        },
    }
</script>