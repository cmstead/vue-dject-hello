function ecosystemLinks(...injectedDependencies) {
    const ecosystemLinks = [
        {
            href: "http://router.vuejs.org/",
            text: "vue-router"
        },
        {
            href: "http://vuex.vuejs.org/",
            text: "vuex"
        },
        {
            href: "http://vue-loader.vuejs.org/",
            text: "vue-loader"
        },
        {
            href: "https://github.com/vuejs/awesome-vue",
            text: "awesome-vue"
        }
    ];

    return ecosystemLinks;
}

export default {
    name: 'ecosystemLinks',
    value: ecosystemLinks
};
