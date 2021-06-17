<template>
    <h1>{{$route.params.id}}</h1>

    <h2>Branches</h2>
    <div class="branches" >
      <RepoCard v-for="branch in allBranches" :key="branch.name" :name="branch.name"/>
    </div>

    <h2>Commits</h2>
    <div>
      <RepoCard v-for="commit in allCommits" :key="commit.commit.message" :name="commit.commit.message"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import RepoCard from '../components/RepoCard.vue';

export default {
  name: 'RepoDetails',
  components: { RepoCard },
  methods: {
    ...mapActions(["getCommits", "getBranches"])
  },
  computed: mapGetters(["allCommits", "allBranches"]),
  created() {
    this.getCommits(this.$route.params.id);
    this.getBranches(this.$route.params.id);
  }
}
</script>

<style>
  h1 {
    font-size: 4rem;
    margin-bottom: 60px;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .branches {
    margin-bottom: 80px;
  }

  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 40px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }
</style>
