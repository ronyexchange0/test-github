<template>
    <h1>About Me</h1>
    <img :src="user.avatar" :alt="user.name" />
    <h2>My Name is <span>{{user.name}}</span> AKA <span>{{user.login}}</span> </h2>
    <p>{{user.bio}}</p>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'About',
  methods: {
    ...mapActions(["getUser"])
  },
  computed: mapGetters(["user"]),
  created() {
    this.getUser();
  }
}
</script>

<style lang="scss" scoped>
  @import '../theme.scss';

  h1 {
    margin-top: 60px;
    font-size: 4rem;
    margin-bottom: 60px;
  }

  h2 {
    margin-bottom: 20px;
  }

  img {
    max-width: 300px;
    border-radius: 50%;
    border: 2px solid $primary ;
    margin-bottom: 40px;
  }

  span {
    color: $primary
  }

  p {
    font-size: 20px;
  }

  @media only screen and (max-width: 992px) {
    h1 {
      margin-top: 32px;
      font-size: 2.5rem;
      margin-bottom: 40px;
    }

    h2 {
      font-size: 20px;
    }

    img {
      max-width: 160px;
      margin-bottom: 40px;
    }

    p {
      font-size: 16px;
    }
  }
</style>
