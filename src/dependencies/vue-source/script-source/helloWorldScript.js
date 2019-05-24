HelloWorld["@dependencies"] = [
    "__container",
    "LinkList",
    "essentialLinks",
    "ecosystemLinks"
];

function HelloWorld({
    __container,
    essentialLinks,
    ecosystemLinks,
    LinkList
}) {

    const componentSetup = {
        name: "HelloWorld",
        components: {
            LinkList: LinkList
        },

        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                refactorMessage: "Refactored with Dject!",
                essentialLinks: essentialLinks,
                ecosystemLinks: ecosystemLinks
            };
        }
    };

    return __container.copyProps(componentSetup, HelloWorld);
}

export default {
    name: "HelloWorld",
    value: HelloWorld
};