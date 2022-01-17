const LIGHT_THEME = 'light-theme'
const DARK_THEME = 'dark-theme'

const themeSwitch = function() {
    switch (this.color) {
        case LIGHT_THEME:
            this.color = DARK_THEME;
            break;

        case DARK_THEME:
            this.color = LIGHT_THEME;
            break;
    
        default:
            this.color = LIGHT_THEME;
            break;
    }
}


export default {
    install(Vue) {
        const theme = Vue.observable({color: LIGHT_THEME});

        theme.dark = DARK_THEME;
        theme.light = LIGHT_THEME;
        theme.switch = themeSwitch;

        Vue.prototype.$theme = theme;
    }
}