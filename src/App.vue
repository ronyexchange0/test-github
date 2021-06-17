  <!-- <div v-for="repo in allRepos" :key="repo.id">{{repo.name}}</div> -->
  <!-- <div v-for="commit in allCommits" :key="commit.sha">{{commit.sha}}</div> -->
  <!-- <div>{{user.name}} {{user.bio}} {{user.avatar}}</div> -->


<template>
  <div class="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style lang="scss">
  @import './theme.scss';

  body {
    background-color: #000;
    color: #fff;
  }

  a {
      text-decoration: none;
      color: #fff
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>
