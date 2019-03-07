<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ refactorMessage }}</h3>

    <h2>Essential Links</h2>
    <LinkList v-bind:linkData="essentialLinks"></LinkList>

    <h2>Ecosystem</h2>
    <LinkList v-bind:linkData="ecosystemLinks"></LinkList>
</div>
</template>

  
<script>
const dependencies = [
    "__container",
    "LinkList",
    "essentialLinks",
    "ecosystemLinks"
];

function HelloWorld(...injectedDependencies) {
    const [container] = injectedDependencies;

    const {
        LinkList,
        essentialLinks,
        ecosystemLinks
    } = container.buildDependencyMap(dependencies, injectedDependencies);

    const componentSetup = {
        name: "HelloWorld",
        components: {
            LinkList: LinkList
        },
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                refactorMessage: 'Refactored with Dject!',
                essentialLinks: essentialLinks,
                ecosystemLinks: ecosystemLinks
            };
        }
    };

    return container.copyProps(componentSetup, HelloWorld);
}

HelloWorld["@dependencies"] = dependencies;

export default {
    name: "HelloWorld",
    value: HelloWorld
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
