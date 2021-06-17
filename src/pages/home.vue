<template>
    <h1>Repos</h1>
    <div class="row">
      <div class="col-sm-6 col-lg-4" v-for="repo in allRepos" :key="repo.id">
          <RepoCard :name="repo.name" :to="`/repo/${repo.name}`"/>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RepoCard from '../components/RepoCard.vue';

export default {
  name: 'Home',
  components: { RepoCard },
  methods: {
    ...mapActions(["getRepos"])
  },
  computed: mapGetters(["allRepos"]),
  created() {
    this.getRepos();
  }
}
</script>

<style scoped>
  h1 {
    font-size: 4rem;
    margin-bottom: 40px;
  }
  
  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 40px;
    }
  }
</style>
