<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
const dependencies = [
  '__container'
];

function App(...injectedDependencies) {
  const [container] = injectedDependencies;

  return container.copyProps({
    name: 'App'
  }, App);
}

App['@dependencies'] = dependencies;

export default {
  name: "App",
  value: App
};
</script>

  <style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
