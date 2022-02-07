import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        phone: '',
        smsCode: '',
        step1: {
            email: '',
            income: '',
            phone: '',
            payment: '',
            loanLimit: '',
            loanSummary: '',
            credits: '',
            carNumber: '',
        },
        step2: {
            address: '',
            address2: '',
            checked: false,
        }
    },

    getters: {
        getPhone: state => {
            return state.phone;
        },
        getSmsCode: state => {
            return state.smsCode;
        },
        getStep1: state => {
            return state.step1;
        },
        getStep2: state => {
            return state.step2;
        },
    },

    mutations: {
        SET_PHONE: (state, payload) => {
            state.phone = payload;
        },
        SET_SMS_CODE: (state, payload) => {
            state.smsCode = payload;
        },
        SET_STEP1: (state, payload) => {
            state.step1 = payload;
        },
        SET_STEP2: (state, payload) => {
            state.step2 = payload;
        },

    },

    actions: {
        setPhone: (context, payload) => {
            context.commit('SET_PHONE', payload);
        },
        setSmsCode: (context, payload) => {
            context.commit('SET_SMS_CODE', payload);
        },
        setStep1: (context, payload) => {
            context.commit('SET_STEP1', payload);
        },
        setStep2: (context, payload) => {
            context.commit('SET_STEP2', payload);
        },
    }
});