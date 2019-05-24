import Router from 'vue-router'

function VueRouterWrapper () {
    return Router;
}

export default {
    name: 'Router',
    value: VueRouterWrapper
};