function essentialLinks(...injectedDependencies) {
    const essentialLinks = [
        {
            href: "https://vuejs.org",
            text: "Core Docs"
        },
        {
            href: "https://forum.vuejs.org",
            text: "Forum"
        },
        {
            href: "https://chat.vuejs.org",
            text: "Community Chat"
        },
        {
            href: "https://twitter.com/vuejs",
            text: "Twitter"
        },
        {
            href: "http://vuejs-templates.github.io/webpack/",
            text: "Docs for This Template"
        },
    ];

    return essentialLinks;
}

export default {
    name: 'essentialLinks',
    value: essentialLinks
};
