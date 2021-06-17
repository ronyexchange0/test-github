<template>
    <component :is="type" :to="to" class="repo-card">
      <p class="text-primary">{{name}}</p>
    </component>
</template>

<script>
export default {
  name: 'RepoCard',
  props: {
      name: {type: String, required: true},
      to: {required: false}
  },
  computed: {
    type () {
      if (this.to) {
        return 'router-link'
      }

      return 'div'
    }
  },
}
</script>

<style>
  .repo-card {
    border: 2px solid #41b883;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  .repo-card p {
    font-size: 3rem;
    max-width: 50%;
    word-wrap: break-word;
  }

  @media only screen and (max-width: 992px) {
    .repo-card {
      min-height: 100px;
    }

    .repo-card p {
      font-size: 2rem;
      max-width: 70%;
    }
  }
</style>
