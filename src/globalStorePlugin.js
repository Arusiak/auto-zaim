/**
 * A global plugin to share states or data between components
 */
import store from './store/store';
const GlobalStorePlugin = {
    install(Vue, options) {
        Vue.prototype.$globalStates = new Vue({
            store,
            data() {
                return {
                    sidebar: {
                        drawer_toggle: false,
                        drawer_toggle_mini: false,
                    },
                    notification: {
                        text: '',
                        type: '',
                        init_notifications: false,
                        persistent: false,
                    },
                    lazy_loader: false,
                    persistent_lazy_loader: false,
                    ready_for_keep_alive: false,
                    note_dialog: false,
                    notification_menu_toggle: false,
                };
            },

            methods: {
                /**
                 * Set global notification
                 * @param data | object
                 */
                setGlobalNotification(data = {}) {
                    let {text, color, persistent} = data;

                    /**
                     * Add a default error message so we don't type the same string on every error message.
                     */
                    if (color === 'error' && !text) {
                        text = 'Something went wrong, please try again later.';
                    }

                    this.notification.text = Array.isArray(text) ? text[0] : text;
                    this.notification.type = color;
                    this.notification.persistent = persistent || false;
                    //If notification showing already.
                    if (this.notification.init_notifications) {
                        this.notification.init_notifications = false; //hide older notification
                        //vuetify next tick
                        this.$nextTick(() => {
                            this.notification.init_notifications = true;
                        });
                    } else {
                        this.notification.init_notifications = true;
                    }
                },

                /**
                 * Set sidebar toggle
                 * @param set | boolean
                 */
                setSidebarToggleDrawer(set) {
                    this.sidebar.drawer_toggle = set;
                },

                /**
                 * show/hide global loader
                 */
                globalLoader(show) {
                    this.lazy_loader = show;
                    this.persistent_lazy_loader = show;
                },
            },
        });
    },
};

export default GlobalStorePlugin;
