<template>
    <div>
        <v-container class="header1">
            <v-row>
                <v-col cols="12">
                    <v-app-bar color="white" app class="pt-2 ">
                        <v-row style="align-items: center">
                            <v-col cols="3" class="d-flex">
                                <v-toolbar-title>
                                    <router-link
                                        :to="{name: 'app-home'}"
                                        class="d-flex align-center"
                                        style="text-decoration: none">
                                        <img :src="appLogo" class="site-logo"/>
                                        <span class="logo-name hidden-sm-and-down">AUTO<b class="text-green">zaim</b>.ru</span>
                                    </router-link>
                                </v-toolbar-title>
                            </v-col>
                            <v-col cols="4">
                                      <span v-if="this.$route.name === 'app-home' || this.$route.name === 'partners' || this.$route.name === 'current-clients' || this.$route.name === 'route-not-found' || this.$route.name === 'refinancing'">
                                <span class="hidden-sm-and-down" v-for="item in mainMenu" :key="item.icon">
                                    <router-link :to="{ name: item.route }" class="header-bar-item">
                                        {{item.title}}
                                    </router-link>
                                </span>
                            </span>
                                <span v-if="this.$route.name === 'welcome-home'">
                                <span class="hidden-sm-and-down" v-for="item in menuWelcome" :key="item.icon" >
                                    <router-link :to="{ name: item.route }" class="header-bar-item">
                                        {{item.title}}
                                    </router-link>
                                </span>
                            </span>
                                <span v-if="this.$route.name === 'sms-code' || this.$route.name === 'insert-data2' || this.$route.name === 'insert-data1' || this.$route.name === 're-authorization' || this.$route.name === 'primary-athorization' || this.$route.name === 'FAQ'">
                                <span class="hidden-sm-and-down" v-for="item in menu" :key="item.icon">
                                    <router-link :to="{ name: item.route }" class="header-bar-item">
                                        {{item.title}}
                                    </router-link>
                                </span>
                            </span>
                            </v-col>
                            <v-col cols="5" class="d-flex justify-end">
                            <v-toolbar-items class="hidden-sm-and-down">
                                <v-row class="align-center justify-end">
                                    <v-col cols="4" class="text-right">
                                        <b class="header-bar-item font-17"  style="letter-spacing: 0.05em; margin: unset">8 800-505-21-65</b><br/>
                                        <img :src="phoneIconSm"/>
                                        <a
                                            class="link-green"
                                            target="_blank"
                                            style="text-decoration: none"
                                            @click.stop="dialog = true">
                                            Заказать звонок
                                        </a>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-select
                                            item-text="title"
                                            :items="items"
                                            outlined
                                            label="Внести платёж"
                                            class="font-12 green-select mt-14"/>
                                    </v-col>
                                    <v-col cols="3">
                                        <router-link :to="{name: 'insert-data1'}" target= '_blank' style="text-decoration: none">
                                            <v-btn
                                                depressed
                                                class="green-btn pa-3 font-12 mt-1">
                                                Получить займ
                                            </v-btn>
                                        </router-link>
                                    </v-col>
                                </v-row>
                            </v-toolbar-items>
                            <span class="d-xl-none d-md-none d-lg-none d-sm-block">
                            <v-app-bar-nav-icon>
                                <img :src="phoneIconMd" @click.stop="dialog = true"/>
                                <img class="ml-2" :src="hamburgerIcon" v-if="showMenu" @click="toggleDrawer"/>
                                <img class="ml-2" :src="closeIcon" v-if="!showMenu" @click="toggleDrawer"/>
                            </v-app-bar-nav-icon>
                            <v-list v-if="!showMenu" class="showMenu">
                                <hr>
                                <span v-if="this.$route.name === 'app-home' || this.$route.name === 'partners' || this.$route.name === 'current-clients' || this.$route.name === 'route-not-found' || this.$route.name === 'refinancing'">
                                    <v-list-item v-for="item in mainMenu" :key="item.icon" >
                                        <v-list-item-content>
                                            <v-list-item-title class="header-bar-item">
                                                <router-link :to="{ name: item.route }" class="header-bar-item">
                                                    {{ item.title }}
                                                </router-link>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </span>
                                <span v-if="this.$route.name === 'welcome-home'">
                                    <v-list-item v-for="item in menuWelcome" :key="item.icon" >
                                        <v-list-item-content>
                                            <v-list-item-title class="header-bar-item">
                                                <router-link :to="{ name: item.route }" class="header-bar-item">
                                                    {{ item.title }}
                                                </router-link>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </span>
                                <span v-if="this.$route.name === 'sms-code' || this.$route.name === 'insert-data2' || this.$route.name === 'insert-data1' || this.$route.name === 're-authorization' || this.$route.name === 'primary-athorization' || this.$route.name === 'FAQ'">
                                    <v-list-item v-for="item in menu" :key="item.icon" >
                                        <v-list-item-content>
                                            <v-list-item-title class="header-bar-item">
                                                <router-link :to="{ name: item.route }" class="header-bar-item">
                                                    {{ item.title }}
                                                </router-link>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </span>
                                <v-row class="justify-center">
                                    <v-col sm="3" cols="4">
                                        <v-select
                                            item-text="title"
                                            :items="items"
                                            outlined
                                            label="Внести платёж"
                                            class="font-12 green-select mt-1"></v-select>
                                    </v-col>
                                    <v-col cols="2">
                                        <router-link :to="{name: 'insert-data1'}" target= '_blank' style="text-decoration: none">
                                            <v-btn
                                                depressed
                                                class="green-btn pa-3 font-12 mt-1">
                                                Получить займ
                                            </v-btn>
                                        </router-link>
                                    </v-col>
                                </v-row>
                            </v-list>
                            </span>
                            </v-col>
                        </v-row>
                    </v-app-bar>
                </v-col>
            </v-row>
            <v-row style="margin-top: 64px; width: 100%; overflow-x: auto" v-if="this.$route.name === 'app-home'">
                <v-col cols="8" class="d-flex">
                    <span v-for="item in secondaryMenu" :key="item.icon">
                        <router-link :to="{ name: item.route }" class="header-bar-item">
                            <span @click="scrollTo(item.ref)" >{{item.title}}</span>
                        </router-link>
                    </span>
                </v-col>
                <v-col cols="4" class="text-right">
                    <span class="italic-text-header">Работаем круглосуточно, по всем городам России</span>
                </v-col>
            </v-row>
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
    </div>
</template>

<script>
    import appLogo from '../../assets/logo.png';
    import CallBack from "../pages/callBack/CallBack";
    import phoneIconSm from '../../assets/phone-sm-icon.png';
    import phoneIconMd from '../../assets/phone-md-icon.png';
    import hamburgerIcon from '../../assets/гамбургер.png';
    import closeIcon from '../../assets/closeIcon.png';
    export default {
        name: 'Header',
        components: {
            CallBack
        },
        data() {
            return {
                appLogo,
                showMenu: true,
                dialog: false,
                hamburgerIcon,
                closeIcon,
                phoneIconSm,
                phoneIconMd,
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
