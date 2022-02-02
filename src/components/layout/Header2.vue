<template>
    <v-container class="header2">
        <v-app-bar color="white" app class="pt-2 pb-15">
            <v-row style=" width: 100%;" class="align-center" v-if="this.$route.name === 'app-home'">
                <v-col cols="1" class="d-flex">
                    <router-link
                            :to="{name: 'app-home'}"
                            class="d-flex align-center"
                            style="text-decoration: none">
                        <img :src="appLogo"/>
                    </router-link>
                </v-col>
                <v-col cols="6" class="d-flex">
                    <span v-for="item in secondaryMenu" :key="item.icon" class="header-two">
                        <router-link :to="{ name: item.route }" class="header-bar-item">
                            <span @click="scrollTo(item.ref)" >{{item.title}}</span>
                        </router-link>
                    </span>
                </v-col>
                <v-col cols="5" class="text-right">
                    <v-toolbar-items class="hidden-sm-and-down">
                        <v-row class="justify-end align-center">
                            <v-col cols="4" class="md-custom2">
                                <b class="header-bar-item font-17" style="letter-spacing: 0.05em;">8 800-505-21-65</b><br/>
                                <v-icon
                                    size="20"
                                    color="green">
                                    mdi-phone
                                </v-icon>
                                <a
                                    class="link-green"
                                    target="_blank"
                                    style="text-decoration: none"
                                    @click.stop="dialog = true">
                                    Заказать звонок
                                </a>
                            </v-col>
                            <v-col cols="3" class="mt-14 platoj">
                                <v-select
                                    item-text="title"
                                    :items="items"
                                    outlined
                                    label="Внести платёж"
                                    class="font-12 green-select mt-1"/>
                            </v-col>
                            <v-col cols="3" class="md-custom1">
                                <router-link :to="{name: 'insert-data1'}" style="text-decoration: none">
                                    <v-btn
                                        depressed
                                        class="green-btn pa-3 font-12 mt-1">
                                        Получить займ
                                    </v-btn>
                                </router-link>
                            </v-col>
                        </v-row>
                    </v-toolbar-items>
                </v-col>
            </v-row>
        </v-app-bar>
        <v-dialog
                style="overflow: hidden !important;"
                class="dialog-site"
                v-model="dialog"
                max-width="50%">
            <v-card>
                <v-card-actions class="pa-0">
                    <v-row>
                        <v-col cols="6" class="hidden-sm-and-down dialogBG text-center" style="height: auto">
                            <div class="d-flex align-center justify-center" style="margin-top: 100px;">
                                <img :src="appLogo"/>
                                <span class="logo-name">AUTO<b class="text-green">zaim</b>.ru</span>
                            </div>
                            <p class="text-middle mt-3">Займы до 3 000 000 ₽ под залог авто</p>
                            <p class="text-small-black mb-15" style="margin-top: 215px;">Работаем круглосуточно, по всем городам России</p>
                        </v-col>
                        <CallBack @onClose="handleCloseModal()"/>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import appLogo from '../../assets/logo.png';
    import CallBack from "../pages/callBack/CallBack";
    export default {
        name: 'Header2',
        components: {
            CallBack
        },
        data() {
            return {
                appLogo,
                showMenu: true,
                dialog: false,
                secondaryMenu: [
                    { route: 'app-home', icon: "home", title: "Условия", ref: "terms" },
                    { icon: "info", title: "Калькулятор", ref: "calculation" },
                    { icon: "warning", title: "Продукты", ref: "products" },
                    { icon: "", title: "Как это работает", ref: "how-it-works" },
                    { icon: "h", title: "Отзывы", ref: "client-feedback" },
                    { icon: "g", title: "Обратная связь", ref: "feedback" }
                ],
                mainMenu: [
                    { route: 'current-clients', icon: "home", title: "Текущим клиентам" },
                    { route: 'partners', icon: "info", title: "Партнёрам" },
                ],
                menu: [
                    { route: 'current-clients', icon: "home", title: "Личный кабинет" },
                    { route: 'FAQ', icon: "info", title: "F.A.Q" },
                ],
                menuWelcome: [
                    { route: 'app-home', icon: "home", title: "Главная"},
                    { route: 'current-clients', icon: "home", title: "Личный кабинет" },
                    { route: 'FAQ', icon: "info", title: "F.A.Q" },
                ],
                items: [
                    { route: 'app-home', title: "«Оптимальный»"},
                    { route: 'primary-athorization', title: "Онлайн-займ"},
                ],
            };
        },
        methods: {
            toggleDrawer() {
                this.showMenu = !this.showMenu;
            },
            scrollTo(refName) {
                const element = document.querySelector(`#${refName}`);
                if (element) {
                    element.scrollIntoView({behavior: "smooth"});
                }
            },
            handleCloseModal() {
                this.dialog = false
            }
        },
    };
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
</style>
