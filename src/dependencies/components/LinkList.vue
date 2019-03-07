<template>
  <ul>
    <li v-for="link in linkData" v-bind:key="link.id">
      <a v-bind:href="link.href">{{link.text}}</a>
    </li>
  </ul>
</template>

<script>
const dependencies = ['__container'];

function LinkList(...injectedDependencies) {
  const [container] = injectedDependencies;

  const componentDefinition = {
    name: "LinkList",
    props: ["linkData"],
    data() {
      return {};
    }
  };

  return container.copyProps(componentDefinition, LinkList);
}

LinkList['@dependencies'] = dependencies;

export default {
  name: "LinkList",
  value: LinkList
};
</script>