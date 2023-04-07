<template>
<div>
    <div :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }">
      <input type="text" v-model="v$.number.$model" />
    </div>
    <div v-for="(error, index) in v$.number.$errors" :key="index">
      {{ error.$message }}
    </div>
    <button @click="showAll = !showAll">Toggle All Output</button>
    <pre v-show="showAll">{{ v$ }}</pre>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
