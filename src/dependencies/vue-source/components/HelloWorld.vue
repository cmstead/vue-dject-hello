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

  
<script src="../script-source/helloWorldScript.js"></script>
<style scoped src="../style-source/helloWorld.css"></style>
