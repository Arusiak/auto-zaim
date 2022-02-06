<template>
    <div class="chat">
        <div @click="toggleDrawer" v-if="close" class="chat-header chat-screen">
            <v-row class="justify-center align-center">
                <v-col cols="1">
                    <div class="circle-green"></div>
                </v-col>
                <v-col cols="10">
                    <p class="p-small" style="color: #FFFFFF">Мы онлайн! Напишите нам!</p>
                </v-col>
            </v-row>
        </div>
        <div @click="toggleDrawer" v-if="close" class="chat-screen-mobile">
            <img :src="messageImg"/>
        </div>
        <div v-if="!close" class="chat-full-body">
            <div class="chat-header py-4 pb-4" style="height: auto">
                <v-row class="align-center">
                    <v-col cols="1" class="ml-3 mr-6">
                        <div class="circle-img">
                            <img :src="chatImg"/>
                        </div>
                    </v-col>
                    <v-col cols="7" class="mobil-col-8">
                        <p class="p-small" style="color: #FFFFFF">Игорь</p>
                        <span class="text-white-small opacity0-5">Консультант</span>
                    </v-col>
                    <v-col cols="1" class="closed-icon mobil-col-2">
                        <v-btn
                            icon
                            @click="toggleDrawer">
                            <v-icon style="color: white">mdi-close</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
            <div style="background: #FFFFFF" class="chat-body">
                <div class="chat-text-body">
                    <v-row class="align-end justify-start mt-3">
                        <v-col cols="1" class="ml-3 mr-2">
                           <img :src="chatImg" width="30" height="30"/>
                        </v-col>
                        <v-col cols="9">
                            <div class="sender-msg text-black-xs">
                                <p style="word-break: break-word">Приветствую вас! С радостью отвечу на ваши вопросы
                                P.S. Я действительно живой человек :)</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="justify-end mt-0">
                        <v-col cols="auto mr-3">
                            <div class="my-msg">
                                <p style="word-break: break-word">Добрый день!</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="justify-end mt-0">
                        <v-col cols="auto mr-3">
                            <div class="my-msg">
                                <p style="word-break: break-word">У меня есть вопрос</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="justify-end mt-0">
                        <v-col cols="auto mr-3">
                            <div class="my-msg">
                                <p style="word-break: break-word">Вы можете мне помочь?</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="footer-chat mt-4">
                    <v-row class="align-center px-3" style="height: 46px">
                        <v-col cols="10">
                            <v-text-field
                                class="text-black-xs chat-input-text"
                                placeholder="Введите сообщение"></v-text-field>
                        </v-col>
                        <v-col cols="1">
                            <v-btn style="height: auto; min-width: auto; padding: unset; box-shadow: unset; background: transparent">
                                <img :src="arrowImg"/>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row class="align-center">
                        <v-col cols="1" class="ml-2">
                            <v-file-input
                                class="file-input"
                                hide-input
                                truncate-length="15"></v-file-input>
                        </v-col>
                        <v-col cols="1" class="mt-4">
                            <img :src="otherImg"/>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import chatImg from '../../assets/chatImg.png';
    import arrowImg from '../../assets/Icon (1).png';
    import otherImg from '../../assets/Icon (2).png';
    import messageImg from '../../assets/message.png';
    export default {
        name: 'Chat',
        data: () => ({
            close: true,
            chatImg,
            arrowImg,
            otherImg,
            messageImg,
        }),
        methods: {
            toggleDrawer() {
                this.close = !this.close;
            },
        }
    };
</script>
