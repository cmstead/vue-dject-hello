<template>
  <ul>
    <li v-for="link in linkData" v-bind:key="link.id">
      <a v-bind:href="link.href">{{link.text}}</a>
    </li>
  </ul>
</template>

<script src="../script-source/linkListScript.js"></script>
