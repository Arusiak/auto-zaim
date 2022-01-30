/* eslint-disable indent */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//
// import store from './store/store';

let routes = [
    {
        path: '/',
        name: 'app-home',
        component: () => import('./components/Home'),
    },
    {
        path: '/currentClients',
        name: 'current-clients',
        component: () => import('./components/CurrentClients'),
    },
    {
        path: '/partners',
        name: 'partners',
        component: () => import('./components/Partners'),
    },
    {
        path: '/FAQ',
        name: 'FAQ',
        component: () => import('./components/pages/FAQ'),
    },
    {
        path: '/primaryAthorization',
        name: 'primary-athorization',
        component: () => import('./components/pages/someSteps/GetMoney'),
    },
    {
        path: '/reAuthorization',
        name: 're-authorization',
        component: () => import('./components/pages/someSteps/ReAuthorization'),
    },
    {
        path: '/refinancing',
        name: 'refinancing',
        component: () => import('./components/Refinancing'),
    },
    {
        path: '/financeHome ',
        name: 'welcome-home',
        component: () => import('./components/pages/someSteps/Home'),
    },
    {
        path: '/stepOneForm',
        name: 'insert-data1',
        component: () => import('./components/pages/someSteps/InsertData1'),
    },
    {
        path: '/stepTwoForm',
        name: 'insert-data2',
        component: () => import('./components/pages/someSteps/InsertData2'),
    },
    {
        path: '/smsCode',
        name: 'sms-code',
        component: () => import('./components/pages/someSteps/SMSCode'),
    },
    {
        path: '*',
        name: 'route-not-found',
        component: () => import('./components/pages/PageNotFound.vue')
    }
];

const Router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: routes,
    scrollBehavior() {
        //Default Scroll to top
        return {x: 0, y: 0};
    },
});

/**
 * Route Guard
 */
// Router.beforeEach((to, from, next) => {
//     //Add loading effect before route switch if not external.
//     if (!to.meta.exclude_lazy_loader) {
//         Vue.prototype.$globalStates.lazy_loader = true;
//     }
//
//     // Close help menu dialog
//     Vue.prototype.$globalStates.help_menu_toggle = false;
//
//     // Note: next('path') where path is not name
//     // changing the path to any of these components must be also applied here
//     // login, dashboard, forgot-password
//     const loggedIn = store.getters['AuthModule/isLoggedIn'];
//     if (!to.matched.length) {
//         // Handle non existent routes
//         if (!loggedIn) {
//             next('login');
//         } else {
//             next('dashboard');
//         }
//     } else {
//         switch (to.meta.authentication) {
//             case 'none':
//                 next();
//                 break;
//             default:
//                 if (loggedIn) {
//                     next();
//                 } else {
//                     next('login');
//                 }
//         }
//     }
// });

/**
 * Vue router hook to remove the loader after page loaded.
 */
// Router.beforeResolve((to, from, next) => {
//     if (to.name) {
//         Vue.prototype.$globalStates.lazy_loader = false;
//         //Set keep alive true if all API the data has been loaded.
//         Vue.prototype.$globalStates.ready_for_keep_alive = store.getters['loadingStatesModule/hasLoadedAllData'];
//     }
//     next();
// });

export default Router; // can be accessed:  this.$router.options.routes.etc...
